import {Routes} from "@angular/router";
import {TodosComponent} from "../components/todos/todos.component";
import {TodoDetailsComponent} from "../components/todo-details/todo-details.component";

export const todoRoutes:Routes = [
  {path:"",component:TodosComponent,children:[
      {path:':id',component:TodoDetailsComponent}
    ]}
]
