import { Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";

export class User {

    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    middlename:string
    @Column()
    lastname:string
    @Column()
    email:string
    @Column()
    password:string
    @Column()
    birthday:Date
    @Column()
    created_at:Timestamp
    @Column()
    update_at:Timestamp
}
