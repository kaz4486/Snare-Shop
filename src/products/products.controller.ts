import {
  Controller,
  Get,
  Patch,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Body,
} from '@nestjs/common';
import { Product } from './db/products.entity';
import { ProductsDataService } from './products-data.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsDataService) {}
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }
  @Get(':id')
  async getProductById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<Product> {
    return await this.productService.getProductById(id);
  }
  @Get('/find/:searchPhrase')
  async getProductsByName(
    @Param('searchPhrase') searchPhrase: string,
  ): Promise<Product[]> {
    const products = await this.productService.getProductsByName(searchPhrase);
    if (products === undefined || !products.length) {
      throw new NotFoundException();
    }
    return products;
  }

  @Patch(':id')
  async updateProductRating(
    @Param('id') id: string,
    @Body() stars: number,
  ): Promise<Product> {
    return this.productService.updateProductRating(id, stars);
  }
}

// @Post()
// async addOrder(@Body() order: CreateOrderDto): Promise<Order> {
//   return await this.orderService.addOrder(order);
// }
