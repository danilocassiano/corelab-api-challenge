import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './resources/task/task.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), TaskModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
