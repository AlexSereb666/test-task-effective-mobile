import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    name: string;
    surname: string;
    age: number;
    gender: string;
    problem: boolean;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    surname: string;
    age: number;
    gender: string;
    problem: boolean;
}
export {};
