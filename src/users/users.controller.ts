import { Controller } from '@nestjs/common';

import { UsersDataService } from './users-data.service';

@Controller('users')
export class UsersController {
  constructor(private userSerivece: UsersDataService) {}
}
