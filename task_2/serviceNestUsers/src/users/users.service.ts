import {Injectable} from "@nestjs/common";
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export  class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createRandomUser(count: number) {
        for (let i = 1; i <= count; i++) {
            await this.userRepository.create({
                name: `name_${i}`,
                surname: `surname_${i}`,
                age: i,
                gender: `male`,
                problem: Math.random() < 0.5
            })
        }
        return {message: 'Пользователи создались успешно!'};
    }

    async fixProblemUsers() {
        const affectedRows = await this.userRepository.update(
            { problem: false },
            { where: { problem: true } }
        );

        return { message: `Изменено ${affectedRows[0]} записей` };
    }
}
