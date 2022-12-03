import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ length: 50 })
  street: string;

  @Column()
  house_number: number;

  @Column({ length: 50 })
  city: string;

  //   @Column({ length: 50 })
  //   street: string;

  //   @Column({ length: 50 })
  //   house_number: string;

  //   @Column('enum', {
  //     enum: Roles,
  //   })
  //   role: Roles;
}
