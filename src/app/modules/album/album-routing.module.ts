import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {albumRoutes} from "./album-routes/album-routes";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(albumRoutes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
