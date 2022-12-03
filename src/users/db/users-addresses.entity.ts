import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'user_addresses',
})
export class UserAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column({
    type: 'int',
  })
  house_number: number;

  //   @ManyToOne(() => User, (user) => user.id, {
  //     onDelete: 'CASCADE',
  //   })
  //   user: User;
}
