import { Column, ObjectID, ObjectIdColumn } from "typeorm";

export class OrderDetail {
    @ObjectIdColumn()
    productId: ObjectID;

    @Column()
    productName: string;

    @Column()
    productImageUrl: string;

    @Column()
    unitPrice: number;

    @Column()
    quantity: number;
}