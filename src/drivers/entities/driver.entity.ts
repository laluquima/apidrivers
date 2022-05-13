import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Driver {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    user_id:number
    @Column()
    crecreated_at:string
    @Column()
    updated_at:string
}
