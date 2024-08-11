import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { LoginUsersDto } from 'src/resources/users/dto/login-users.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() loginDto: LoginUsersDto,
  ): Promise<{ token: string; expiresIn: number }> {
    return this.authService.signIn(loginDto);
  }
}
