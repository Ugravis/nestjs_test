import { Logger, Module, NestModule, OnModuleInit, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/users/users.module';
import { DatabaseModule } from 'src/common/database/database.module';
import { Sequelize } from 'sequelize-typescript';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule, OnModuleInit {
  private readonly logger = new Logger(AppModule.name)
  constructor(private sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      this.logger.log("✅ Database connected successfully");
    } catch (error) {
      this.logger.error("❌ Database connection failed", error)
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}