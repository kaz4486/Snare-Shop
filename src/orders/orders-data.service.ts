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
    console.log('productsToSave', productsToSave);

    for (let i = 0; i < productsToSave.length; i++) {
      const orderedProduct = new OrderedProduct();
      console.log(productsToSave[i].id);
      const productFromDB = await this.productRepository.findOneBy({
        id: productsToSave[i].id,
      });

      console.log(productFromDB);

      orderedProduct.product = new Product();
      orderedProduct.product.id = productFromDB.id;

      orderedProduct.product.name = productFromDB.name;
      orderedProduct.count = productsToSave[i].count;

      orderedProduct.price = productFromDB.price;

      orderedProduct.comment = productsToSave[i].comment;
      //   productsToSave.forEach((product) => {
      //     orderedProduct.comment = product.comment;
      //   });

      await this.orderedProductRepository.save(orderedProduct);
      orderedProducts.push(orderedProduct);

      return orderedProducts;
    }
  }

  async addOrder(order: CreateOrderDto): Promise<Order> {
    console.log('order', order);
    const orderToSave = new Order();

    orderToSave.orderedProducts = await this.saveOrderedProducts(
      order.products,
    );
    console.log(orderToSave.orderedProducts);
    orderToSave.user = new User();
    orderToSave.user.firstName = order.user.firstName;
    orderToSave.user.lastName = order.user.lastName;
    orderToSave.user.email = order.user.email;
    orderToSave.user.city = order.user.city;
    orderToSave.user.house_number = order.user.house_number;
    orderToSave.user.street = order.user.street;
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
