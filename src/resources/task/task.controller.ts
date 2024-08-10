import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from '@prisma/client';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.create(task);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return await this.taskService.findOne(+id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return await this.taskService.update(+id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.taskService.delete(+id);
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    return await this.taskService.findAll(pageNumber, limitNumber);
  }
}
