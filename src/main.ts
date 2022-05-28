import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist : DTO에 없는 속성 제외
      whitelist: true,
      // forbidNonWhitelisted : 전달하는 요청 값 중에 정의 되지 않은 값이 있으면 Error 발생
      forbidNonWhitelisted: true,
      // transform : 객체를 자동으로 DTO로 변환을 원하면 transform 값을 true로 설정
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
