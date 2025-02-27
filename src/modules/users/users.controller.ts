import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll()
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto)
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() updateData: Partial<CreateUserDto>): Promise<User> {
        return await this.usersService.patch(id, updateData)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<{ message: string }> {
        return await this.usersService.delete(id)
    }
}