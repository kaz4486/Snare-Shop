import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

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
