import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsDataService } from './products-data.service';

@Controller('products')
export class ProductsController {
  constructor(private productRepository: ProductsDataService) {}
  @Get()
  getAllProducts(): Array<Product> {
    return this.productRepository.getAllProducts();
  }
  @Get()
  getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Product {
    return this.productRepository.getProductById(id);
  }
}
