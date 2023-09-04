import { Product } from '../../products/db/products.entity';
import { Order } from './orders.entity';
export declare class OrderedProduct {
    id: string;
    order: Order;
    product: Product;
    price: number;
    count: number;
    comment: string;
}
