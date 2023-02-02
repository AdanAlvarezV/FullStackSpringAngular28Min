import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message:string;
/*
  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Become an expert at angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
    //{id: 1, description: 'Learn to dance'},
    //{id: 2, description: 'Become an expert at angular'},
    //{id: 3, description: 'Visit India'}
  ];
  */
/*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
*/
  constructor(
    private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos("UsernameTest")
      .subscribe(
        response => {
          //console.log(response);
          this.todos = response;
        }
      );
  }
  
  deleteTodo(id){
    console.log(`Delete todo : ${id}`);
    this.todoService.deleteTodo("UsernameTest", id)
      .subscribe(response => {
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      });
  }

  updateTodo(id){
    console.log(`Update ${id}`);
    this.router.navigate(['/todos',id]);
  }

  addTodo(){
    this.router.navigate(['/todos', -1]);
  }

}
