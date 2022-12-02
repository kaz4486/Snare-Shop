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
  price: number;

  @IsDate()
  createdAt: Array<number>;
}

export class ExternalOrderedProductDto {
  @IsNotEmpty()
  @IsUUID()
  orderedProductId: string;

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

  @Min(0)
  @IsNumber()
  count: number;
}

export class ExternalOrderedUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateNested({ each: true })
  @Type(() => UserAddress)
  address: Array<UserAddress>;
}
