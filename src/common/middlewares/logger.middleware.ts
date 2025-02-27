import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import chalk from "chalk";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        console.log(`${chalk.bgGreen(`Nouvelle requête`)}: ${req.method} ${req.baseUrl}`)
        next()
    }
}