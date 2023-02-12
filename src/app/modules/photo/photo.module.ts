import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import {PhotoService} from "./services";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  providers:[PhotoService]
})
export class PhotoModule { }
