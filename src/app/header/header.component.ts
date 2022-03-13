import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name = new FormControl('');

  handleAddTodo() {
    if(this.name.value === '') return
    this.todosService.addTodo(this.name.value)
    this.name.setValue('')
  }

  constructor(private todosService: TodosService) {}

  ngOnInit() {}
}
