import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommentsJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment:CommentsJsonInterface;

  @Output()
  lift = new EventEmitter<CommentsJsonInterface>;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}

  click($event: MouseEvent) {
    this.lift.emit(this.comment);
  }

  getCommentDetails() {
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute,state:{comment:this.comment}})
  }
}
