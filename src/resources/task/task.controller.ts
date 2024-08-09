import { Controller, Post, Body, Param, Get, Patch } from '@nestjs/common';
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
}
