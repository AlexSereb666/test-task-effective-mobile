import { Sequelize } from 'sequelize';

const dbName: string = process.env.DB_NAME || '';
const dbUser: string = process.env.DB_USER || '';
const dbPassword: string = process.env.DB_PASSWORD || '';
const dbHost: string = process.env.DB_HOST || '';
const dbPort: number = Number(process.env.DB_PORT) || 5432;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'postgres',
    host: dbHost,
    port: dbPort
});

export default sequelize;
