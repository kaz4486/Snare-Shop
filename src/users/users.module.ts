import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './db/users.entity';
import { UsersController } from './users.controller';
import { UsersDataService } from './users-data.service';
import { UserRepository } from './db/users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersDataService, UserRepository],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
