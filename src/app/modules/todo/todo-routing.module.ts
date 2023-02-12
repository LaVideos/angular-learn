import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {todoRoutes} from "./todo-routes";

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
