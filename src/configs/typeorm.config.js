import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'Ryan',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: true,
};