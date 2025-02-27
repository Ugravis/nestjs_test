import { IsNotEmpty, IsString, IsInt, Min, Max } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(150)
    age: number
}