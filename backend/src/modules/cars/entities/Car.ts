import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('cars')
class Car {
  @PrimaryColumn()
  id: string

  @Column()
  user_id: string

  @Column()
  model: string

  @Column()
  color: string

  @Column()
  avatar: string

  @Column()
  daily_amount: number

  @Column()
  license_plate: string

  @Column()
  year: string

  @Column()
  available: boolean

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

export { Car }
