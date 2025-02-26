import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";

@Injectable()
export class UsersService {
    getAll(): User[] {
        return [{ name: 'Jean', age: 21 }, { name: 'Claude', age: 23 }]
    }
}