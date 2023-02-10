import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsService} from "../../../services";
import {CommentsJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {

  comment:CommentsJsonInterface;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];
      if(!this.comment){
        this.commentsService.getCommentById(id).subscribe(value => this.comment = value);
      }
    })
  }



}
