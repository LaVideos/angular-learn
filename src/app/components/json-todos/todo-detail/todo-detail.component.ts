import {Component, OnInit} from '@angular/core';
import {TodosJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {TodosService} from "../../../services";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit{
  todo: TodosJsonInterface;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private todosService:TodosService) {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.todo = this.router.getCurrentNavigation()?.extras.state?.["todo"];
      if(!this.todo){
        this.todosService.getTodoById(id).subscribe(value => this.todo = value);
      }
    })
  }



}
