import { Car } from '@modules/cars/entities/Car'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('rents')
class Rent {
  @PrimaryColumn()
  id: string

  @Column()
  client_id: string

  @Column()
  amount: number

  @Column()
  start_date: Date

  @Column()
  finish_date: Date

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car

  @Column()
  car_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Rent }
