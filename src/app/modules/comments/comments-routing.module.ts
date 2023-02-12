import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {commentRoutes} from "./comment-routes/comment-routes";


@NgModule({
  imports: [RouterModule.forChild(commentRoutes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
