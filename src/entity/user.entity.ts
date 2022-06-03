import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './post.entity';

@Entity({ name: 'user' })
@Unique(['userId'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  userId: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  salt: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'smallint' })
  age: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  upadtedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt' })
  deletedAt?: Date | null;

  @OneToMany(() => Post, (post) => post.id)
  postId: Post[];
}
