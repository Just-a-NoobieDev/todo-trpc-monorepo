import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getTodos(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async getTodoById(id: number) {
    return await this.todoModel.findById(id);
  }

  async seed() {
    await this.todoModel.create({
      title: 'First todo',
      description: 'This is the first todo',
      completed: false,
    });
    await this.todoModel.create({
      title: 'Second todo',
      description: 'This is the second todo',
      completed: false,
    });
    await this.todoModel.create({
      title: 'Third todo',
      description: 'This is the third todo',
      completed: false,
    });
  }
}
