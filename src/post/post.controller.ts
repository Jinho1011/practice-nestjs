import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Post('')
  createPost() {
    return this.postService.createPost();
  }

  @Patch(':id')
  updatePost(@Param('id') id: string) {
    return this.postService.updatePost(id);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
