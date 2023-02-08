import {Component, Input} from '@angular/core';
import {TodosJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input()
  todo:TodosJsonInterface;
  constructor() {}
}
