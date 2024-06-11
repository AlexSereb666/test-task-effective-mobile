import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
    name: string;
    surname: string;
    age: number;
    gender: string;
    problem: boolean;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    surname: string;

    @Column({type: DataType.INTEGER})
    age: number;

    @Column({type: DataType.STRING})
    gender: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    problem: boolean;
}
