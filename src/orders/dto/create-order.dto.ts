import { CreateUserDto } from './../../users/dto/create-user.dto';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsUUID,
  Min,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderedProductDto)
  products: Array<CreateOrderedProductDto>;

  @Column({
    default: 0,
    type: 'float',
  })
  totalPrice: number;
}

export class CreateOrderedProductDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  name: string;

  @Min(1)
  @IsNumber()
  count: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  comment: string;

  @Min(1)
  @IsNumber()
  price: number;
}
