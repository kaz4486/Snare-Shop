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
  photoName: string;

  @Column({ default: 0, type: 'float' })
  price: number;
}
