const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    age: {type: DataTypes.INTEGER},
    gender: {type: DataTypes.STRING},
    problem: {type: DataTypes.BOOLEAN, defaultValue: false},
});

const HistoryActionsUser = sequelize.define('historyActionsUser', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    action: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
});

User.hasMany(HistoryActionsUser);
HistoryActionsUser.belongsTo(User);

module.exports = {
    User,
    HistoryActionsUser,
};
