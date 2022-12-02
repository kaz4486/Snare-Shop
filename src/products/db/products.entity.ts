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
  photos: Array<string>;

  @Column({
    default: 1,
  })
  count: number;
}
