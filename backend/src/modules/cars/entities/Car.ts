import { User } from '@modules/users/entities/User'
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

@Entity('cars')
class Car {
  @PrimaryColumn()
  id: string

  @Column()
  user_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User

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
