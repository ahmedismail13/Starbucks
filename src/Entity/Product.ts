import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    unitPrice: number;

    @Column()
    availableStock: number;

    @Column()
    imageUrl: string;

    @Column()
    type: string;

    @Column()
    category: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    lastLogin: Date;
}
