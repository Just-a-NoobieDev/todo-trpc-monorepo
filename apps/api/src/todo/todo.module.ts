import { TrpcModule } from '@api/trpc/trpc.module';
import { Module, forwardRef } from '@nestjs/common';
import { TodoRouter } from './todo.router';
import { TrpcService } from '@api/trpc/trpc.service';
import { TodoService } from './todo.service';
import { Todo, TodoSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    forwardRef(() => TrpcModule),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [TodoRouter, TrpcService, TodoService],
})
export class TodoModule {}
