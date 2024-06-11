import * as dotenv from 'dotenv';
dotenv.config();

// @ts-ignore
import express from 'express';
// @ts-ignore
import cors from 'cors';
import sequelize from './db';
import router from './routes/index';

const PORT: number = parseInt(process.env.PORT as string, 10) || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/service_2', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
