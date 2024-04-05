import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  constructor() {}

  todos = [
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Walk the dog', done: true },
  ];

  getTodos() {
    return this.todos;
  }

  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }
}
