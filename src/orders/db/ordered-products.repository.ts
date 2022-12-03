import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OrderedProduct } from './ordered-products.entity';

@Injectable()
export class OrderedProductRepository extends Repository<OrderedProduct> {
  constructor(private dataSource: DataSource) {
    super(OrderedProduct, dataSource.createEntityManager());
  }
}
