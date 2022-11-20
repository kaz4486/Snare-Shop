import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsDataService {
  private products: Array<Product> = [];

  getAllProducts(): Array<Product> {
    return this.products;
  }

  getProductById(id: string): Product {
    return this.products.find((i) => i.id === id);
  }
}
