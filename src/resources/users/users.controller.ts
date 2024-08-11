import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.usersService.create(user);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
