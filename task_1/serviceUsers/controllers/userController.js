const {
    User,
    HistoryActionsUser
} = require('../models/models');
const { createActionHistoryUser } = require('../http/historyAPI');

class userController {
    async createUser(req, res) {
        try {
            const {name, surname, age, gender} = req.body;

            if (!name || !surname || !age && !gender) {
                return res.status(404).json({message: 'Для создания пользователя недостаточно данных!'});
            }
            const data = await User.create({name, surname, age, gender});
            await createActionHistoryUser(data.id, 'Зарегистрирован', new Date()).then(data => console.log(data));
            return res.json(data);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }

    async editUser(req, res) {
        try {
            const id = req.params.id;
            const { name, surname, age, gender } = req.body;

            if (!name || !surname || !age && !gender) {
                return res.status(404).json({message: 'Для изменения пользователя недостаточно данных!'});
            }

            const updatedUser = await User.update(
                { name, surname, age, gender },
                { where: { id: id }, returning: true }
            );

            if (updatedUser[0] === 0) {
                return res.status(404).json({ message: `Пользователь с id ${id} не найден!` });
            }

            const [user] = updatedUser[1];

            await createActionHistoryUser(user.id, 'Обновлен', new Date()).then(data => console.log(data));
            return res.json({ message: 'Данные пользователя успешно обновлены', user });
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }

    async getListUsers(req, res) {
        try {
            const listUsers = await User.findAll();
            return res.json(listUsers);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}

module.exports = new userController();
