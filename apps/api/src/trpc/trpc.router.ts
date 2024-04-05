import {
  INestApplication,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from './trpc.service';
import { TodoRouter } from '@api/todo/todo.router';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    @Inject(forwardRef(() => TodoRouter))
    private readonly todoRouter: TodoRouter,
  ) {}

  appRouter = this.trpc.mergeRouters(this.todoRouter.router);

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
