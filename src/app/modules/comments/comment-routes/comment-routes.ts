import {Routes} from "@angular/router";
import {CommentsComponent} from "../components/comments/comments.component";
import {CommentDetailsComponent} from "../components/comment-details/comment-details.component";

export const commentRoutes: Routes = [
  {path:'',component:CommentsComponent,children:[
      {path:':id',component:CommentDetailsComponent}
    ]}
];
