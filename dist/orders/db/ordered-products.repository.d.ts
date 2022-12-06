import { DataSource, Repository } from 'typeorm';
import { OrderedProduct } from './ordered-products.entity';
export declare class OrderedProductRepository extends Repository<OrderedProduct> {
    private dataSource;
    constructor(dataSource: DataSource);
}
