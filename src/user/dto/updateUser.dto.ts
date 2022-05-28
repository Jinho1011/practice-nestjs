import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  id: string;
}
