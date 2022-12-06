import { ExternalOrderDto } from './dto/external-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersDataService } from './orders-data.service';
import { Order } from './db/orders.entity';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersDataService);
    getAllOrders(): Promise<ExternalOrderDto[]>;
    geOrderById(id: string): Promise<ExternalOrderDto>;
    addOrder(order: CreateOrderDto): Promise<Order>;
    mapOrderToExternal(order: Order): ExternalOrderDto;
}
