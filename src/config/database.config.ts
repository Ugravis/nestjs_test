import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { User } from "src/modules/users/models/user.model";
import * as dotenv from 'dotenv'; dotenv.config();

export const databaseConfig: SequelizeModuleOptions = {
    dialect: "mariadb",
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.NODE_ENV==='production' ? process.env.PROD_DB_HOST : process.env.DEV_DB_HOST,
    username: process.env.NODE_ENV==='production' ? process.env.PROD_DB_USERNAME : process.env.DEV_DB_USERNAME,
    password: process.env.NODE_ENV==='production' ? process.env.PROD_DB_PASSWORD : process.env.DEV_DB_PASSWORD,
    database: process.env.NODE_ENV==='production' ? process.env.PROD_DB_NAME : process.env.DEV_DB_NAME,
    autoLoadModels: true,
    synchronize: true,
    sync: { force: true }
}