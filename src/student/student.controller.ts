// student.controller.ts
import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('hello2/:id')
  getStudentswithParams(@Param('id') id : string) : string{
    // return this.studentService.getAllStudent();
    console.log(id);
    return `hello2 id: #${id}`;
  }
  
  // @Get('hello1/:id')
  // createStudentswithParams(@Query(name?: string) : string) : string{
  //   // return this.studentService.getAllStudent();
  //   console.log(name);
  //   return `hello2 id: # ${name}`;
  // }
  
  // @Get()
  // getAllStudents() {
  //   return this.studentService.getAllStudent();
  // }

  @Post()
  createStudent() {
    return this.studentService.createStudent('Park', '201720799');
  }

  @Delete()
  deleteStudent() {
    return this.studentService.deleteStduent('201720799');
  }

  @Patch()
  updateStudent() {
    return this.studentService.updateStudent('201720799');
  }
}