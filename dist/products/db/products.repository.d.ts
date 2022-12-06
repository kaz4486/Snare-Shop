import { DataSource, Repository } from 'typeorm';
import { Product } from './products.entity';
export declare class ProductRepository extends Repository<Product> {
    private dataSource;
    constructor(dataSource: DataSource);
}
