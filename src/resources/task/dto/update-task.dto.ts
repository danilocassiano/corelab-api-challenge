import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import message from 'src/validator/message.validator';

export class UpdateTaskDto {
  @IsOptional()
  @Length(1, 255, { message: message.maxLength(255) })
  @IsString({ message: message.isString })
  title?: string;

  @IsOptional()
  @Length(0, 500, { message: message.maxLength(500) })
  @IsString({ message: message.isString })
  description?: string;

  @IsOptional()
  @Length(0, 7, { message: message.maxLength(7) })
  @IsString({ message: message.isString })
  color?: string;

  @IsOptional()
  @IsBoolean({ message: message.isBoolean })
  favorite?: boolean;
}
