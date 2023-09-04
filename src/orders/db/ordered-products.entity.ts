import { Product } from '../../products/db/products.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';

@Entity({
  name: 'ordered-products',
})
export class OrderedProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @ManyToOne(() => Product, (product) => product.id, { eager: true })
  product: Product;

  @Column({
    default: 0,
    type: 'float',
  })
  price: number;

  @Column({
    default: 1,
  })
  count: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  comment: string;
}
