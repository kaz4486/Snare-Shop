import { OrderedProduct } from './db/ordered-products.entity';
import { ProductRepository } from '../products/db/products.repository';
import { OrderRepository } from './db/order.repository';
import { OrderedProductRepository } from './db/ordered-products.repository';
import { CreateOrderedProductDto, CreateOrderDto } from './dto/create-order.dto';
import { Order } from './db/orders.entity';
export declare class OrdersDataService {
    private orderRepository;
    private productRepository;
    private orderedProductRepository;
    constructor(orderRepository: OrderRepository, productRepository: ProductRepository, orderedProductRepository: OrderedProductRepository);
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
    saveOrderedProducts(productsToSave: CreateOrderedProductDto[]): Promise<OrderedProduct[]>;
    addOrder(order: CreateOrderDto): Promise<Order>;
}
