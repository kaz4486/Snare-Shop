import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { ORMConfig as config } from './ormconfig';

import * as cors from 'cors';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    TypeOrmModule.forRoot(config as ConnectionOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
