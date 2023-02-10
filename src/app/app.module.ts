import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {
  CommentComponent,
  UserComponent,
  PostsComponent,
  UsersComponent,
  PostComponent,
  CommentsComponent,
  PhotosComponent,
  PhotoComponent,
  TodosComponent,
  TodoComponent,
  AlbumComponent,
  AlbumsComponent,
  HeaderComponent,
  UserDetailsComponent,
  CommentDetailComponent,
  AlbumDetailsComponent,
  PhotoDetailComponent,
  TodoDetailComponent,
  PostDetailsComponent
} from './components';
import {RouterModule} from "@angular/router";

import {routes} from "./routes";
import {
  AlbumsPageComponent,
  CommentsPageComponent,
  PhotosPageComponent,
  PostsPageComponent,
  TodosPageComponent,
  UsersPageComponent
} from "./pages";
import { MainLayoutComponent } from './layouts';

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
    TodoComponent,
    AlbumsPageComponent,
    CommentsPageComponent,
    UsersPageComponent,
    PostsPageComponent,
    PhotosPageComponent,
    TodosPageComponent,
    MainLayoutComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailComponent,
    AlbumDetailsComponent,
    PhotoDetailComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
