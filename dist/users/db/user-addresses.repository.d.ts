import { Repository, DataSource } from 'typeorm';
import { UserAddress } from './users-addresses.entity';
export declare class UserAddressRepository extends Repository<UserAddress> {
    private dataSource;
    constructor(dataSource: DataSource);
}
