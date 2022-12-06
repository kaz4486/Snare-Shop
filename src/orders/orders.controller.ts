import { ExternalOrderDto } from './dto/external-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersDataService } from './orders-data.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Order } from './db/orders.entity';
import { dateToArray } from 'src/shared/helpers/date.helper';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersDataService) {}

  @Get()
  async getAllOrders(): Promise<ExternalOrderDto[]> {
    const orders = await this.orderService.getAllOrders();
    return orders.map((i) => this.mapOrderToExternal(i));
  }

  @Get(':id')
  async geOrderById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<ExternalOrderDto> {
    const order = await this.orderService.getOrderById(id);
    if (order === undefined || order === null) {
      throw new NotFoundException();
    }
    return this.mapOrderToExternal(order);
  }

  @Post()
  async addOrder(@Body() order: CreateOrderDto): Promise<Order> {
    return await this.orderService.addOrder(order);
  }

  mapOrderToExternal(order: Order): ExternalOrderDto {
    const user = {
      firstName: order.user.firstName,
      lastName: order.user.lastName,
      email: order.user.email,
      street: order.user.street,
      house_number: order.user.house_number,
      city: order.user.city,
      id: order.user.id,
    };

    return {
      ...order,
      user: user,
      orderedProducts: order.orderedProducts.map((i) => {
        const orderedProduct = {
          id: i.id,
          productId: i.product.id,
          productName: i.product.name,
          price: i.price,
          count: i.count,
          comment: i.comment,
          orderId: order.id,
        };
        return orderedProduct;
      }),
      createdAt: dateToArray(order.createdAt),
    };
  }
}
