import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { User } from 'src/entity/user.entity';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUUID()
  @IsNotEmpty()
  userId: User;
}
