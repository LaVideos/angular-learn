import {Routes} from "@angular/router";
import {PostsComponent} from "../components/json-post/posts/posts.component";
import {PostDetailsComponent} from "../components/json-post/post-details/post-details.component";

export const postRoutes: Routes = [
  {path:'',component:PostsComponent,children:[
      {path:':id',component:PostDetailsComponent}
    ]}
];
