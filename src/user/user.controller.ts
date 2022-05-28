import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  getUserByParam(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get()
  getUserByQuery(@Query('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post('/create')
  createUser(@Body() userData) {
    return this.userService.createUser(userData);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() userData) {
    return this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
