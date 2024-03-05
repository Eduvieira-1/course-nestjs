import { IsEmail } from 'class-validator';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  admin: boolean;
}
