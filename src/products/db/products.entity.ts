import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  mainPhoto: string;

  @Column({ default: 0, type: 'float' })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('simple-array')
  photos: Array<Photo>;

  @Column({
    default: 1,
  })
  count: number;

  @Column({
    type: 'bool',
  })
  sale: boolean;

  @Column({
    type: 'bool',
  })
  bestSeller: boolean;

  @Column({
    default: 1,
  })
  stars: number;

  @Column({ type: 'text', nullable: false })
  category: string;
}

export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  name: string;
  @ValidateNested({ each: true })
  @Type(() => Product)
  product: Array<Product>;
}
