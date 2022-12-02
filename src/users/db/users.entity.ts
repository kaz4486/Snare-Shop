import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { Roles } from '../../shared/enums/roles.enums';
import { UserAddress } from './users-addresses.entity';

// import { UserAddress } from './addresses.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50 })
  email: string;

  @OneToMany((type) => UserAddress, (address) => address.user)
  address: UserAddress[];

  //   @Column({ length: 50 })
  //   street: string;

  //   @Column({ length: 50 })
  //   house_number: string;

  //   @Column('enum', {
  //     enum: Roles,
  //   })
  //   role: Roles;
}
