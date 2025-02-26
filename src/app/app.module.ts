import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/modules/users/users.module';
import { DatabaseModule } from 'src/db/database.module';
import { Sequelize } from 'sequelize-typescript';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements OnModuleInit {
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
}