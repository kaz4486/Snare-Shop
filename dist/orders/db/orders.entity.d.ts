import { User } from 'src/users/db/users.entity';
import { OrderedProduct } from './ordered-products.entity';
export declare class Order {
    id: string;
    createdAt: Date;
    orderedProducts: OrderedProduct[];
    user: User;
    totalPrice: number;
}
