import { IsString, Min } from 'class-validator';
import { UserAddress } from 'src/users/db/users-addresses.entity';
import { User } from 'src/users/db/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
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
  })
  orderedProducts: OrderedProduct[];

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;

  @ManyToOne(() => UserAddress, (address) => address.id, {
    onDelete: 'CASCADE',
    eager: true,
  })
  userAddress: UserAddress;

  @Column({ type: 'float' })
  @Min(0)
  totalPrice: number;

  @Column({ type: 'text' })
  @IsString()
  comment: string;

  //   @Column('enum', {
  //     enum: Statuses,
  //   })
  //   status: Statuses;
}
