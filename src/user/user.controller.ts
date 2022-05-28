import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  getUserByParam(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Get()
  getUserByQuery(@Query('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}
