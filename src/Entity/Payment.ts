import { Column } from "typeorm";

export class Payment {
    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    createdAt: Date;
}