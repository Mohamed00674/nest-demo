import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Todos } from 'src/todos/entities/todos.entity';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Todos, (todo) => todo.user)
  todos: Todos[];
}
