import { Column, PrimaryGeneratedColumn } from "typeorm"

export class City {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    country_id:number
    @Column()
    name:string
    @Column()
    expedition_date:Date
    @Column()
    expiration_date:Date
}
