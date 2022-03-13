import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  todos = this.todosService.getTodos();

  handleToggleTodo(id: number) {
    this.todosService.toggleTodo(id);
    this.todos = this.todosService.getTodos();
  }

  handleDeleteTodo(id: number) {
    this.todosService.deleteTodo(id);
    this.todos = this.todosService.getTodos();
  }

  constructor(private todosService: TodosService) {}

  ngOnInit() {
  }
}
