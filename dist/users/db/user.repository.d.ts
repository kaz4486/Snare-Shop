import { Repository, DataSource } from 'typeorm';
import { User } from './users.entity';
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
}
