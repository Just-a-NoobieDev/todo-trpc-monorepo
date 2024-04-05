import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrpcModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/nestjs-trpc-todo',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
