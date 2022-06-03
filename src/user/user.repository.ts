import { NotFoundException } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAll(): Promise<User[]> {
    return await this.find();
  }

  async findById(id: string): Promise<User> {
    const user = await this.findOne({ where: { id } });

    if (!user) throw new NotFoundException('cannot find user');

    return user;
  }

  async onCreate(createUserDto: CreateUserDto): Promise<boolean> {
    const { userId, password, name, age } = createUserDto;

    const user = await this.save({
      userId,
      password,
      name,
      age,
      salt: 'temporary',
    });

    return user ? true : false;
  }

  async onChangeUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    const { name, age } = updateUserDto;

    const changeUser = await this.update({ id }, { name, age });

    if (changeUser.affected !== 1)
      throw new NotFoundException('cannot update user');

    return true;
  }

  async onDelete(id: string): Promise<boolean> {
    const deletedUser = await this.delete({ id });

    if (deletedUser.affected === 0)
      throw new NotFoundException('cannot delete user');

    return true;
  }
}
