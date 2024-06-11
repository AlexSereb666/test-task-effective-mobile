import sequelize from '../db';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
    public id!: number;
    public name!: string;
    public surname!: string;
    public age!: number;
    public gender!: string;
    public problem!: boolean;
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING },
        surname: { type: DataTypes.STRING },
        age: { type: DataTypes.INTEGER },
        gender: { type: DataTypes.STRING },
        problem: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
        sequelize,
        modelName: 'user',
    }
);

class HistoryActionsUser extends Model {
    public id!: number;
    public action!: string;
    public date!: Date;
}

HistoryActionsUser.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        action: { type: DataTypes.STRING },
        date: { type: DataTypes.DATE },
    },
    {
        sequelize,
        modelName: 'historyActionsUser',
    }
);

User.hasMany(HistoryActionsUser);
HistoryActionsUser.belongsTo(User);

export { User, HistoryActionsUser };
