import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  BaseEntity,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
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
  role: Role;

  @Column()
  userSource: UserSource;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  lastLogin: Date;

  @Column(() => Address)
  address: [Address];
}

export enum UserSource {
  FACEBOOK = "FACEBOOK",
  GOOGLE = "GOOGLE",
  EMAIL = "EMAIL",
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
}
