import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IComment} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment:IComment;
  show:boolean = false
  @Output()
  lift = new EventEmitter<IComment>();

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ShowCommentBody() {
    this.show = !this.show
  }

  liftEmail() {
    this.lift.emit(this.comment)
  }

  showAllData() {
    this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute,state:{comment:this.comment}})
  }
}
