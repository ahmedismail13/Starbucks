import { Column } from "typeorm";

export class Address {
    @Column()
    city: string;

    @Column()
    area: string;

    @Column()
    street: string;

    @Column()
    building: number;

    @Column()
    floor: number;

    @Column()
    apartment: number;

    @Column()
    zipCode: number;
}