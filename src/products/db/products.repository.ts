import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }
}
