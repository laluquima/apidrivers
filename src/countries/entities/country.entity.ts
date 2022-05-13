import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Country {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    description:string
    @Column()
    expedition_date:Date
    @Column()
    expiration_date:Date
}
