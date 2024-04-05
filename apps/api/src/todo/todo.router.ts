import { TrpcService } from '@api/trpc/trpc.service';
import { Injectable } from '@nestjs/common';
import { TodoService } from './todo.service';

@Injectable()
export class TodoRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly todoService: TodoService,
  ) {}

  router = this.trpcService.router({
    todos: this.trpcService.procedure.query(() => {
      return {
        todos: this.todoService.todos,
      };
    }),
  });
}
