import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService {
      todos: TodoModel[] = [
            {id: 1, title: "t1", description: "d1",created_at: new Date(2021, 1, 21), completed: true },
            {id: 2, title: "t2", description: "d2",created_at: new Date(2022, 2, 22), completed: true},
            {id: 3, title: "t3", description: "d3",created_at: new Date(2023, 3, 23), completed: true },
            {id: 4, title: "t4", description: "d4",created_at: new Date(2024, 4, 24), completed:  false},
            {id: 5, title: "t5", description: "d5",created_at: new Date(2025, 5, 25), completed:  false}
      ]

      findTodo(): TodoModel[]{
            return this.todos;
      }

      findTodoById(id: number): TodoModel{
            return this.todos.find(i => i.id == id);
      } 
}
