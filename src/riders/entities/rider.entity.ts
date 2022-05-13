import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Rider {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    user_id:number
    @Column()
    creadted_at:string
    @Column()
    updated_at:string
}
