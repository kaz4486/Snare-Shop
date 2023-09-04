import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderedProductRepository } from './db/ordered-products.repository';
import { UserRepository } from './../users/db/users.repository';
import { ProductRepository } from '../products/db/products.repository';
import { OrderRepository } from './db/order.repository';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersDataService } from './orders-data.service';

@Module({
  controllers: [OrdersController],
  providers: [
    OrdersDataService,
    OrderRepository,
    ProductRepository,
    UserRepository,
    OrderedProductRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([
      OrderRepository,
      OrderedProductRepository,
      ProductRepository,
      UserRepository,
    ]),
  ],
})
export class OrdersModule {}
