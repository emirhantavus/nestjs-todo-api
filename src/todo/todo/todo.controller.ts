import { Controller, Get, Param , NotFoundException, Body , Post} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoModel } from './todo.model';

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

      @Post()
      createTodo(@Body() todo: TodoModel){
            return this.todoService.CreateTodo(todo);
      }
}
//id,title,description,created_at,completed