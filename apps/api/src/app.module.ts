import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrpcModule,
    //TODO: Replace the connection string with your own
    MongooseModule.forRoot(
      'mongodb://localhost:27017/mongouri'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
