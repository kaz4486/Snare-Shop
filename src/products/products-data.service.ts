import { PrismaService } from '../shared/services/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '@prisma/client';

import { ProductRepository } from './db/products.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsDataService {
  constructor(private prismaService: PrismaService) {}
  private products: Array<Product> = [];

  getAllProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async getProductById(id: Product['id']): Promise<Product | null> {
    return await this.prismaService.product.findUnique({ where: { id } });
  }

  async getProductsByName(name: string): Promise<Product[]> {
    return await this.prismaService.product.findMany({
      where: { name: `%${name}%` },
    });
  }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(productData: Omit<Product, 'id'>): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }

  public updateById(
    id: Product['id'],
    productData: Omit<Product, 'id'>,
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: { id },
      data: productData,
    });
  }
}
