import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsUUID,
  Min,
  IsNumber,
  MaxLength,
  MinLength,
  IsEmail,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { UserAddress } from 'src/users/db/users-addresses.entity';
import { Column } from 'typeorm';

export class ExternalOrderDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ValidateNested({ each: true })
  @Type(() => ExternalOrderedUserDto)
  user: ExternalOrderedUserDto;

  @ValidateNested({ each: true })
  @Type(() => ExternalOrderedProductDto)
  orderedProducts: Array<ExternalOrderedProductDto>;

  @Min(0)
  @IsNumber()
  totalPrice: number;

  @IsDate()
  createdAt: Array<number>;
}

export class ExternalOrderedProductDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  orderId: string;

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @MinLength(0)
  @MaxLength(25)
  productName: string;

  @Min(0)
  @IsNumber()
  price: number;

  @Min(1)
  @IsNumber()
  count: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  comment: string;
}

export class ExternalOrderedUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  house_number: number;

  @IsNotEmpty()
  city: string;
}
