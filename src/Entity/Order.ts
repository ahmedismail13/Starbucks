import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";
import { OrderDetail } from "./OrderDetail";
import { Payment } from "./Payment";

@Entity()
export class Order extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @ObjectIdColumn()
    userId: ObjectID;

    @Column()
    totalPrice: number;

    @Column()
    discount: number;

    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    reordered: boolean;

    @Column(type => OrderDetail)
    orderDetail: [OrderDetail];

    @Column(type => Address)
    address: Address;

    @Column(type => Payment)
    payment: Payment;
}
