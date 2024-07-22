import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TodoItemsModule } from './todo-items/todo-items.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TodosModule, TodoItemsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
