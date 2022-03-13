import { Injectable } from '@angular/core';
import { Todo, demo_todos } from './demo_todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = demo_todos;
  id_count: number = 6;

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    const todoElement = {
      id: this.id_count + 1,
      name: todo,
      isDone: false,
    };
    this.todos.push(todoElement);
    this.id_count++;
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  constructor() {}
}
