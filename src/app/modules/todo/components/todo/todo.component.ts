import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodos} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo:ITodos
  status:boolean = false;

  @Output()
  lift = new EventEmitter<ITodos>();

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  showStatus() {
    this.status = !this.status
  }

  liftId($event: MouseEvent) {
    this.lift.emit(this.todo)
  }

  showAllData() {
    this.router.navigate([this.todo.id],{relativeTo:this.activatedRoute,state:{todo:this.todo}})
  }
}
