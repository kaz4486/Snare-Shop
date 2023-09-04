import {
  Controller,
  Get,
  Patch,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Body,
  Delete,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductsDataService } from './products-data.service';
import { UpdateProductDTO } from './dto/update-product.dto';

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
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
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

  @Post('/')
  create(@Body() productData: Product) {
    return this.productService.create(productData);
  }
  //create product dto? 59 moduł 35

  // @Patch(':id')
  // async updateProductRating(
  //   @Param('id') id: string,
  //   @Body() stars: number,
  // ): Promise<Product> {
  //   return this.productService.updateProductRating(id, stars);
  // }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!(await this.productService.getProductById(id)))
      throw new NotFoundException('Product not found');
    await this.productService.updateById(id, productData);
    return { success: true };
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.productService.getProductById(id)))
      throw new NotFoundException('Product not found');
    await this.productService.deleteById(id);
    return { success: true };
  }
}

// @Post()
// async addOrder(@Body() order: CreateOrderDto): Promise<Order> {
//   return await this.orderService.addOrder(order);
// }
