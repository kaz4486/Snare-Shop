import { Injectable } from '@nestjs/common';
import { Like } from 'typeorm';
import { Product } from './db/products.entity';
import { ProductRepository } from './db/products.repository';

@Injectable()
export class ProductsDataService {
  constructor(private productRepository: ProductRepository) {}
  private products: Array<Product> = [];

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: string): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async getProductsByName(name: string): Promise<Product[]> {
    return await this.productRepository.findBy({ name: Like(`%${name}%`) });
  }
}
