import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotoRoutes} from "./album-routes/photo-routes";

@NgModule({
  imports: [RouterModule.forChild(PhotoRoutes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
