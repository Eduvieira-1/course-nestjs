import { updateCourseDto } from './dto/create-course.dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { Tag } from './entities/tags.entity';
import { HttpStatus } from "@nestjs/common";
/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Course } from "./entities/course.entity";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll() {
    return this.courseRepository.find({
      relations: ['tags'],
    });
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['tags'],
    });

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map(name => this.preloadTagByName(name)),
      )
      const course = this.courseRepository.create({
        ...createCourseDto,
        tags
      })
      
      console.log('curso aqui', course);
    

   return this.courseRepository.save(course)
  }

  async update(id: number, updateCourseDto: updateCourseDto) {
    const tags = 
    updateCourseDto.tags &&
    (await Promise.all(
      updateCourseDto.tags.map(name => this.preloadTagByName(name)),
    ))

    const course = await this.courseRepository.preload({
      ...updateCourseDto,
      id,
      tags
    })

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id },
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.remove(course)
  }

  private async preloadTagByName(name: string): Promise<Tag>{
    const tag = await this.tagRepository.findOne({ where: { name }})
    
    if(tag){
      return tag 
    }

    return this.tagRepository.create({name})
  }
}
