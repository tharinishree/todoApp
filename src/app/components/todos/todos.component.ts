import { TODO } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    title = 'My Todo App';
    resetInput = '';
    //todoService;
    todos: TODO[];
    constructor( private todoService: TodoService
    ) {
        }

    ngOnInit() {
        this.getTodos();
    }
      
    getTodos() {
        this.todoService.getList()
            .subscribe(todosList => {
               this.todos = todosList;
               console.log('Fetched Todos', this.todos);
           } );
    }
    addNewTodo(title: string) {
        if (!title) { return; }
        const isCompleted = false;
        console.log('addNewTodo', title);
        this.resetInput = '';
        this.todoService.addNewTodo( {title, isCompleted} as TODO );
    }
    deleteTodo(id) {
        this.todoService.deleteTodo(id);
    }
}
