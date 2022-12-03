import { OrdersDataService } from './orders-data.service';
import { Body, Controller, Post } from '@nestjs/common';
import { Order } from './db/orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersDataService) {}

  @Post()
  async addOrder(@Body() order): Promise<Order> {
    console.log(order);
    return await this.orderService.addOrder(order);
  }
}
