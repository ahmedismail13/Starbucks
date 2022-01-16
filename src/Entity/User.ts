import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  imageUrl: string;

  @Column()
  phoneNumber: string;

  @Column()
  role: string;

  @Column()
  userSource: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  lastLogin: Date;

  @Column(type => Address)
  address: [Address];
}
