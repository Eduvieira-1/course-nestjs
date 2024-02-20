import { randomUUID } from 'crypto';
import { Course } from 'src/courses/entities/course.entity';
import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string
    
    @ManyToMany(() => Course, course => course.tags)
    courses: Course[]

    @CreateDateColumn({type: 'timestamp'})
    created_At: Date
  
    @BeforeInsert()
    generatedId() {
      if (this.id) {
        return;
      }
      this.id = randomUUID();
    }
}