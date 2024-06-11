import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {UserService} from "./users.service";

@Module({
    controllers: [UsersController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User])
    ]
})
export class UsersModule {}
