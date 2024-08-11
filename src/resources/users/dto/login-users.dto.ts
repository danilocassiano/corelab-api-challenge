import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import message from 'src/validator/message.validator';

export class LoginUsersDto {
  @IsEmail({}, { message: message.isEmail })
  @IsNotEmpty({ message: message.isEmpty })
  email: string;

  @IsNotEmpty({ message: message.isEmpty })
  @Length(6, 120, { message: message.minLength(6) })
  @Length(0, 20, { message: message.maxLength(20) })
  password: string;
}
