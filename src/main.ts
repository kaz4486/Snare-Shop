// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as fs from 'fs';
// import * as https from 'https';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     httpsOptions: {
//       key: fs.readFileSync('path/to/private/key.pem'),
//       cert: fs.readFileSync('path/to/certificate.pem'),
//     },
//   });
//   app.setGlobalPrefix('api');
//   app.useGlobalPipes(new ValidationPipe({ transform: true }));
//   await app.listen(process.env.PORT || 3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PrismaService } from './shared/services/prisma.service';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
