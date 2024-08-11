import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(newUser: CreateUserDto): Promise<User> {
    const hashPassword = bcryptHashSync(newUser.password, 10);

    const existingUser = await this.prisma.user.findUnique({
      where: { email: newUser.email },
    });

    if (existingUser) {
      throw new ConflictException(
        `Usuário com o e-mail ${newUser.email} já existe.`,
      );
    }

    return await this.prisma.user.create({
      data: {
        ...newUser,
        password: hashPassword,
      },
    });
  }

  async findOne(id: number, deletaSenha: boolean = true): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user)
      throw new HttpException(
        `Usuario com '${id}' não foi encontrado.`,
        HttpStatus.NOT_FOUND,
      );

    deletaSenha && delete user.password;

    return user;
  }
}
