import { Min } from 'class-validator';
import { User } from 'src/users/db/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { OrderedProduct } from './ordered-products.entity';

@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => OrderedProduct, (orderedProduct) => orderedProduct.order, {
    eager: true,
    cascade: true,
  })
  orderedProducts: OrderedProduct[];

  @ManyToOne(() => User, (user) => user.firstName, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  user: User;

  @Column({ type: 'float' })
  @Min(0)
  totalPrice: number;

  //   @Column('enum', {
  //     enum: Statuses,
  //   })
  //   status: Statuses;

  //   @ManyToOne(() => User, (user) => user.id, {
  //     onDelete: 'CASCADE',
  //     eager: true,
  //   })
  //   user: User;
}
