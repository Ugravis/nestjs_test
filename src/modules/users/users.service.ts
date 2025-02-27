import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.findAll()
    }
  
    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create(createUserDto)
    }

    async patch(id: string, updateData: Partial<CreateUserDto>): Promise<User> { /* Partial<> rend tous les champs optionnels */
        const user = await this.userModel.findByPk(id)
        if(!user) throw new NotFoundException(`L'utilisateur <${id}> n'existe pas`)
        await user.update(updateData)
        return user
    }

    async delete(id: string): Promise<{ message: string }> {
        const user = await this.userModel.findByPk(id)
        if(!user) throw new NotFoundException(`L'utilisateur <${id}> n'existe pas`)
        await this.userModel.destroy({ where: { id } })
        return { message: `Utilisateur <${id}> supprimé` }
    }
}