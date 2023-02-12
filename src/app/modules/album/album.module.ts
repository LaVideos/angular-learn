import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import {AlbumsService} from "./services";


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ],
  providers:[AlbumsService]
})
export class AlbumModule { }
