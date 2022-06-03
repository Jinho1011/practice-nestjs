import { NotFoundException } from '@nestjs/common';
import { Post } from 'src/entity/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async findById(id: string) {
    const post = await this.findOne({ where: { id } });

    if (!post) throw new NotFoundException('cannot find user');

    return post;
  }

  async onCreate(createPostDto: CreatePostDto) {
    const post = await this.save({ ...createPostDto, views: 0 });
    return post ? true : false;
  }

  async onDelete(id: string) {
    const deletedPost = await this.delete({ id });

    if (deletedPost.affected === 0)
      throw new NotFoundException('cannt delete user');

    return true;
  }

  async onUpdate(id: string, updatePostDto: UpdatePostDto) {
    const changePost = await this.update({ id }, { ...updatePostDto });

    if (changePost.affected !== 1)
      throw new NotFoundException('cannt update user');

    return true;
  }
}
