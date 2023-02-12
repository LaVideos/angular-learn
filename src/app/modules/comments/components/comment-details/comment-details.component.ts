import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment-service/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit{

  comment:IComment;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private commentService:CommentService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];
      if(!this.comment){
        this.commentService.getCommentById(id).subscribe(value => this.comment = value);
      }
    })
  }

}
