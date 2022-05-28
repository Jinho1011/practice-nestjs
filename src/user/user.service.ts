import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  getUser(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<boolean> {
    return this.userRepository.onCreate(createUserDto);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userRepository.onChangeUser(id, updateUserDto);
  }

  deleteUser(id: string): Promise<boolean> {
    return this.userRepository.onDelete(id);
  }
}
