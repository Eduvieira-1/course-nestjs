import { CoursesService } from "./courses.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto/create-course.dto";
import { updateCourseDto } from "./dto/create-course.dto/update-course.dto";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(":id")
  // findOne(@Param() params){
  //desestruturação
  findOne(@Param("id") id: string) {
    return this.coursesService.findOne(id);
  }

  //o que for colocado dentro do @Body() por exemplo 'name' o corpo da resposta
  //será apenas o que informar dentro dele caso queira algo especifico
  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCourseDto: updateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coursesService.remove(id);
  }
}
