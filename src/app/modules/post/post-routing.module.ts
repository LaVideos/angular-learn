import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {postRoutes} from "./post-routes";

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
