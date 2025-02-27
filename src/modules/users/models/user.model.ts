import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttributes {
    name: string;
    age: number;
}

@Table({ tableName: `users` })
export class User extends Model<User, UserCreationAttributes> {
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    age: number
}