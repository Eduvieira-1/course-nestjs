import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { randomUUID } from 'node:crypto'
import { Course } from './course.entity'

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return
    }
    this.id = randomUUID()
  }
}
