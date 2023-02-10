import {Routes} from "@angular/router";
import {
  AlbumsPageComponent,
  CommentsPageComponent,
  PhotosPageComponent,
  PostsPageComponent,
  TodosPageComponent,
  UsersPageComponent
} from "../pages";
import {MainLayoutComponent} from "../layouts";
import {
  AlbumDetailsComponent,
  CommentDetailComponent, PhotoDetailComponent,
  PostDetailsComponent,
  TodoDetailComponent,
  UserDetailsComponent
} from "../components";

export const routes:Routes = [
  {path:'',component:MainLayoutComponent, children:[
      {path:'',redirectTo:'users',pathMatch:"full"},
      {path:'users',component:UsersPageComponent, children:[
          {path:':id', component:UserDetailsComponent}
        ]},
      {path:'posts',component:PostsPageComponent,children:[
          {path: ':postId',component: PostDetailsComponent}
        ]},
      {path:'comments',component:CommentsPageComponent,children:[
          {path:':id',component: CommentDetailComponent}
        ]},
      {path:'photos',component:PhotosPageComponent,children:[
          {path: ':id',component: PhotoDetailComponent}
        ]},
      {path:'todos',component:TodosPageComponent,children:[
          {path:':id',component: TodoDetailComponent}
        ]},
      {path:'albums',component:AlbumsPageComponent,children:[
          {path: ':id',component: AlbumDetailsComponent}
        ]},
    ]},
];
