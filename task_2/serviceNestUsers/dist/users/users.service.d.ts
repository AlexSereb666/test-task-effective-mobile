import { User } from "./users.model";
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    createRandomUser(count: number): Promise<{
        message: string;
    }>;
    fixProblemUsers(): Promise<{
        message: string;
    }>;
}
