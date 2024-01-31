import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @ManyToMany(() => Course, course => course.tags)
    courses: Course[]
}