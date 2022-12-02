import { Injectable } from '@nestjs/common';
import { UserRepository } from './db/users.repository';
import { User } from './db/users.entity';

@Injectable()
export class UsersDataService {
  constructor(private userRepository: UserRepository) {}

  getAllProducts(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getProductById(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }
}
