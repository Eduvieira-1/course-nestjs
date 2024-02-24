import { Tag } from './entities/tags.entity';
import { Course } from 'src/courses/entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";

@Module({
  imports: [TypeOrmModule.forFeature([Course, Tag])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
