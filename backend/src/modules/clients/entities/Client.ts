import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('clients')
class Client {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  tel: string

  @Column()
  email: string

  @Column()
  password: string

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

export { Client }
