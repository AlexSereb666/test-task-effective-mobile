import { UserService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UserService);
    createRandomUsers(count: number): Promise<{
        message: string;
    }>;
    fixProblemUsers(): Promise<{
        message: string;
    }>;
}
