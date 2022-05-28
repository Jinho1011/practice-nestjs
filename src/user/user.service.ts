import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
