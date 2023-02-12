import {Component, OnInit} from '@angular/core';
import {ITodos} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit{

  todo:ITodos;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private todoService:TodoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.todo = this.router.getCurrentNavigation()?.extras.state?.['todo'];
      if(!this.todo){
        this.todoService.getTodoById(id).subscribe(value => this.todo = value);
      }
    })
  }



}
