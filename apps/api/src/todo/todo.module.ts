import { TrpcModule } from '@api/trpc/trpc.module';
import { Module, forwardRef } from '@nestjs/common';
import { TodoRouter } from './todo.router';
import { TrpcService } from '@api/trpc/trpc.service';
import { TodoService } from './todo.service';

@Module({
  imports: [forwardRef(() => TrpcModule)],
  providers: [TodoRouter, TrpcService, TodoService],
})
export class TodoModule {}
