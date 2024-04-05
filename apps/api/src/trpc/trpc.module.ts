import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { TodoRouter } from '@api/todo/todo.router';
import { TodoModule } from '@api/todo/todo.module';
import { TodoService } from '@api/todo/todo.service';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [TrpcService, TrpcRouter, TodoRouter, TodoService],
  exports: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
