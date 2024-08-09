import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(task: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: task.title,
        description: task.description,
        color: task.color,
        favorite: task.favorite || false,
      },
    });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task)
      throw new HttpException(`Tarefa não encontrada.`, HttpStatus.NOT_FOUND);

    return task;
  }

  async update(id: number, body: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task)
      throw new HttpException(`Tarefa não encontrada.`, HttpStatus.NOT_FOUND);

    const updateTask = await this.prisma.task.update({
      where: { id },
      data: body,
    });

    return updateTask;
  }
}
