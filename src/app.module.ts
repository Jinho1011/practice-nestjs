import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserModule, PostModule, TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
