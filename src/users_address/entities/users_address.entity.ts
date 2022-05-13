import { Column, PrimaryGeneratedColumn } from "typeorm"

export class UsersAddress {

    @PrimaryGeneratedColumn()
    id:number
    @Column()
    user_id:number
    @Column()
    city_id:number
    @Column()
    address:string
    @Column()
    description:string
    @Column()
    zipcode:string
    @Column()
    geolocation:string
}
