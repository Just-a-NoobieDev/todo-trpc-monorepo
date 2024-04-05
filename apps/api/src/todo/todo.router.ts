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
    todos: this.trpcService.procedure.query(async () => {
      return {
        todos: (await this.todoService.getTodos()) || [],
      };
    }),
    seed: this.trpcService.procedure.mutation(async () => {
      await this.todoService.seed();
      return {};
    }),
  });
}
