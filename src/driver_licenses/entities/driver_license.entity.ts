import { Column, PrimaryGeneratedColumn } from "typeorm"

export class DriverLicense {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    driver_id:number
    @Column()
    license_type_id:number
    @Column()
    expedition_date:Date
    @Column()
    expiration_date:Date
    @Column()
    crecreated_at:string
    @Column()
    updated_at:string
}
