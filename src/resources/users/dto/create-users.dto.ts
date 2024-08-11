import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import message from 'src/validator/message.validator';
export class CreateUserDto {
  @IsEmail({}, { message: message.isEmail })
  @IsNotEmpty({ message: message.isEmpty })
  email: string;

  @IsNotEmpty({ message: message.isEmpty })
  @Length(0, 50, { message: message.maxLength(50) })
  @Length(2, 150, { message: message.minLength(2) })
  nome: string;

  @IsNotEmpty({ message: message.isEmpty })
  @Length(0, 20, { message: message.maxLength(20) })
  @Length(6, 120, { message: message.minLength(6) })
  password: string;
}
