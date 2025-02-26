import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { databaseConfig } from "src/config/database.confg";

@Module({
    imports: [SequelizeModule.forRoot(databaseConfig)]
})
export class DatabaseModule {}