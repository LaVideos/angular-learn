import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CommentComponent,UserComponent, PostsComponent,UsersComponent,PostComponent,CommentsComponent,PhotosComponent,PhotoComponent,TodosComponent,TodoComponent,AlbumComponent,AlbumsComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    AlbumsComponent,
    AlbumComponent,
    PhotosComponent,
    PhotoComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
