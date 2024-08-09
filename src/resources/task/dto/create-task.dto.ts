import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import message from 'src/validator/message.validator';

export class CreateTaskDto {
  @Length(1, 255, { message: message.maxLength(255) })
  @IsString({ message: message.isString })
  @IsNotEmpty({ message: message.isEmpty })
  title: string;

  @IsOptional()
  @Length(0, 500, { message: message.maxLength(500) })
  @IsString({ message: message.isString })
  description?: string;

  @IsOptional()
  @Length(0, 7, { message: message.maxLength(7) }) // Supondo que a cor seja em formato hexadecimal
  @IsString({ message: message.isString })
  color?: string;

  @IsOptional()
  @IsBoolean({ message: message.isBoolean })
  favorite?: boolean;
}
