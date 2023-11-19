import { Controller, Get, Param , NotFoundException } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

      constructor(private readonly todoService: TodoService) { }

      @Get()
      getTodo(){
            return this.todoService.findTodo();
      }

      @Get(':id')
      getTodoById(@Param('id') id: number){
            let t = this.todoService.findTodoById(id);
            if(!t){
                 throw new NotFoundException(`Id:${id} does not found`)
            }
            return t;
      }
}
//id,title,description,created_at,completed