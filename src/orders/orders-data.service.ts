import { UserAddress } from './../users/db/users-addresses.entity';
import { OrderedProduct } from './db/ordered-products.entity';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/products/db/products.repository';
import { OrderRepository } from './db/order.repository';
import { OrderedProductRepository } from './db/ordered-products.repository';
import {
  CreateOrderedProductDto,
  CreateOrderDto,
} from './dto/create-order.dto';
import { Product } from 'src/products/db/products.entity';
import { Order } from './db/orders.entity';
import { User } from 'src/users/db/users.entity';

@Injectable()
export class OrdersDataService {
  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository,
    private orderedProductRepository: OrderedProductRepository,
  ) {}

  async saveOrderedProducts(
    productsToSave: CreateOrderedProductDto[],
  ): Promise<OrderedProduct[]> {
    const orderedProducts: OrderedProduct[] = [];

    for (let i = 0; i < productsToSave.length; i++) {
      const orderedProduct = new OrderedProduct();
      const productFromDB = await this.productRepository.findOneBy({
        id: productsToSave[i].productId,
      });

      orderedProduct.product = new Product();
      orderedProduct.product.id = productFromDB.id;
      orderedProduct.product.name = productFromDB.name;
      orderedProduct.count = productFromDB.count;
      orderedProduct.price = productFromDB.price;

      await this.orderedProductRepository.save(orderedProduct);
      orderedProducts.push(orderedProduct);

      return orderedProducts;
    }
  }

  async addOrder(order: CreateOrderDto): Promise<Order> {
    const orderToSave = new Order();

    orderToSave.orderedProducts = await this.saveOrderedProducts(
      order.products,
    );
    orderToSave.user = new User();
    orderToSave.user.id = order.userId;
    orderToSave.userAddress = new UserAddress();
    orderToSave.comment = order.comment;
    orderToSave.createdAt = new Date();
    orderToSave.totalPrice = 0;

    let productPrice = 0;
    orderToSave.orderedProducts.forEach((product) => {
      productPrice += product.price * product.count;
    });

    order.products.forEach((product) => {
      const productAmount = product.count;
      orderToSave.totalPrice += productPrice * productAmount;
    });
    return await this.orderRepository.save(orderToSave);
  }
}
