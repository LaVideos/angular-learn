import {Router, Routes} from "@angular/router";
import {MainLayoutComponent} from "../layouts/main-layout/main-layout.component";

export const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'users',pathMatch:"full"},
      {path:'users',loadChildren:()=>import("../modules/user/user.module").then(value => value.UserModule)},
      {path:'posts',loadChildren:()=>import("../modules/post/post.module").then(value => value.PostModule)},
      {path:'comments',loadChildren:()=>import("../modules/comments/comments.module").then(value => value.CommentsModule)},
      {path:'albums',loadChildren:()=>import("../modules/album/album.module").then(value => value.AlbumModule)},
      {path:'photos',loadChildren:()=>import("../modules/photo/photo.module").then(value => value.PhotoModule)},
      {path:'todos',loadChildren:()=>import("../modules/todo/todo.module").then(value => value.TodoModule)},
    ]}
]
