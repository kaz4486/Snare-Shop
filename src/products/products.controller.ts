import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Product } from './db/products.entity';
import { ProductsDataService } from './products-data.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsDataService) {}
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }
  @Get()
  async getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Product> {
    return await this.productService.getProductById(id);
  }
  @Get()
  async getProductsByName(
    @Param('searchPhrase') searchPhrase: string,
  ): Promise<Product[]> {
    return await this.productService.getProductsByName(searchPhrase);
  }
}
