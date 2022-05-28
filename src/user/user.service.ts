import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  private users = [];

  deleteUser(id: number) {
    throw new Error('Method not implemented.');
  }
  updateUser(id: number, userData: any) {
    throw new Error('Method not implemented.');
  }
  createUser(userData: any) {
    throw new Error('Method not implemented.');
  }
  getUser(id: number) {
    throw new Error('Method not implemented.');
  }
  getAllUser() {
    throw new Error('Method not implemented.');
  }
}
