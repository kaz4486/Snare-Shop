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
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  userAddressesId: string;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderedProductDto)
  products: Array<CreateOrderedProductDto>;

  @Column({
    type: 'text',
    nullable: true,
  })
  comment: string;

  @Column({
    default: 0,
    type: 'float',
  })
  price: number;
}

export class CreateOrderedProductDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @Min(0)
  @IsNumber()
  count: number;
}
