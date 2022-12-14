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

  getAllOrders(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  getOrderById(id: string): Promise<Order> {
    const order = this.orderRepository.findOneBy({ id });
    return order;
  }

  async saveOrderedProducts(
    productsToSave: CreateOrderedProductDto[],
  ): Promise<OrderedProduct[]> {
    const orderedProducts: OrderedProduct[] = [];
    productsToSave.map(async (product) => {
      const orderedProduct = new OrderedProduct();

      const productFromDB = await this.productRepository.findOneBy({
        id: product.id,
      });

      orderedProduct.product = new Product();
      orderedProduct.product.id = productFromDB.id;

      orderedProduct.product.name = productFromDB.name;
      orderedProduct.count = product.count;

      orderedProduct.price = productFromDB.price;

      orderedProduct.comment = product.comment;
      //   productsToSave.forEach((product) => {
      //     orderedProduct.comment = product.comment;
      //   });
      await this.orderedProductRepository.save(orderedProduct);
      orderedProducts.push(orderedProduct);
    });

    return orderedProducts;
  }

  async addOrder(order: CreateOrderDto): Promise<Order> {
    const orderToSave = new Order();

    orderToSave.orderedProducts = await this.saveOrderedProducts(
      order.products,
    );
    orderToSave.user = new User();
    orderToSave.user.firstName = order.user.firstName;
    orderToSave.user.lastName = order.user.lastName;
    orderToSave.user.email = order.user.email;
    orderToSave.user.city = order.user.city;
    orderToSave.user.house_number = order.user.house_number;
    orderToSave.user.street = order.user.street;
    orderToSave.createdAt = new Date();
    orderToSave.totalPrice = order.totalPrice;

    // let productPrice = 0;
    // orderToSave.orderedProducts.forEach((product) => {
    //   productPrice += product.price * product.count;
    // });

    // order.products.forEach((product) => {
    //   const productAmount = product.count;
    //   orderToSave.totalPrice += productPrice * productAmount;
    // });

    return await this.orderRepository.save(orderToSave);
  }
}
