import { UserRepository } from './db/users.repository';
import { User } from './db/users.entity';
export declare class UsersDataService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllProducts(): Promise<User[]>;
    getProductById(id: string): Promise<User>;
}
