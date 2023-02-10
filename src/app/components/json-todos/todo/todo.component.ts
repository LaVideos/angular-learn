import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodosJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo:TodosJsonInterface;
  @Output()
  lift = new EventEmitter<TodosJsonInterface>;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}
  getTodosId($event: MouseEvent) {this.lift.emit(this.todo);}

  getTodoDetails() {
    this.router.navigate([this.todo.id],{relativeTo:this.activatedRoute,state:{todo:this.todo}})
  }
}
