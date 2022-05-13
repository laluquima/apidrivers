import { Column, PrimaryGeneratedColumn } from "typeorm"

export class LicenseType {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    description:number
    @Column()
    crecreated_at:string
    @Column()
    updated_at:string
}
