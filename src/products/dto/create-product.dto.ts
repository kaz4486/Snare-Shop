import { Photo } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  mainPhoto: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  description: string;

  @IsNotEmpty()
  photos: Array<Photo>;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  count: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  stars: number;

  @IsNotEmpty()
  sale: boolean;

  @IsNotEmpty()
  bestSeller: boolean;
}
