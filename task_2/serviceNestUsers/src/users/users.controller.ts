import {Post, Body, Controller, Get, Put} from "@nestjs/common";
import {UserService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UserService) {}

    @Post()
    createRandomUsers(@Body('count') count: number) {
        return this.usersService.createRandomUser(count);
    }

    @Put()
    fixProblemUsers() {
        return this.usersService.fixProblemUsers();
    }
}
