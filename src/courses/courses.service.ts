import { HttpStatus } from "@nestjs/common";
/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from "@nestjs/common";
import { Course } from "./entities/course.entity";

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Fundamentos do framework do NestJS",
      description: "Fundamentos do framework do NestJS",
      tags: ["node,js", "nestjs", "javascript"],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: number, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: number) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
