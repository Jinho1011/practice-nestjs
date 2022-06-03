import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository) private postRepository: PostRepository,
  ) {}

  getPostById(id: string) {
    return this.postRepository.findById(id);
  }

  createPost(createPostDto: CreatePostDto) {
    return this.postRepository.onCreate(createPostDto);
  }

  deletePost(id: string) {
    return this.postRepository.onDelete(id);
  }

  updatePost(id: string, updatePostDto: UpdatePostDto) {
    return this.postRepository.onUpdate(id, updatePostDto);
  }
}
