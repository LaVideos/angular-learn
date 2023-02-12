import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/json-post/posts/posts.component';
import { PostDetailsComponent } from './components/json-post/post-details/post-details.component';
import { PostComponent } from './components/json-post/post/post.component';
import {PostService} from "./services/post-service/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[
    PostService
  ]
})
export class PostModule { }
