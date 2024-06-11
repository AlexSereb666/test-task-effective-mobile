import { Request, Response } from 'express';
import { HistoryActionsUser } from '../models/models';

class HistoryController {
    async getListHistoryUser(req: Request, res: Response): Promise<Response> {
        try {
            const id: number = parseInt(req.params.id, 10);
            const page: number = parseInt(req.query.page as string, 10) || 1; // Получаем номер страницы из параметров запроса или устанавливаем 1, если параметр не задан
            const limit: number = parseInt(req.query.limit as string, 10) || 10; // Получаем количество записей на странице из параметров запроса или устанавливаем 10, если параметр не задан

            const offset: number = (page - 1) * limit; // Рассчитываем смещение

            const history = await HistoryActionsUser.findAll({
                where: { userId: id },
                limit: limit,
                offset: offset,
            });

            return res.json(history);
        } catch (e: any) {
            return res.status(500).json({ message: (e as Error).message });
        }
    }

    async createHistoryUser(req: Request, res: Response): Promise<Response> {
        try {
            const id: number = parseInt(req.params.id, 10);
            const { action, date } = req.body;

            if (!action || !date) {
                return res.status(404).json({ message: 'Для создания истории недостаточно данных!' });
            }

            const data = await HistoryActionsUser.create({ action, date, userId: id });
            return res.json(data);
        } catch (e: any) {
            return res.status(500).json({ message: (e as Error).message });
        }
    }
}

export default new HistoryController();
