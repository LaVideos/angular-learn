import {Component, OnInit} from '@angular/core';
import {ITodos} from "../../../../interfaces";
import {TodoService} from "../../services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos:ITodos[]
  selectedTodos:ITodos
  constructor(private todoService:TodoService) {
  }
  ngOnInit(): void {
    this.todoService.getAll().subscribe(value => this.todos = value);
  }

  getLiftComment($event: ITodos) {
    this.selectedTodos = $event;
  }
}
