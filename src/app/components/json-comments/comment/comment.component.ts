import {Component, Input} from '@angular/core';
import {CommentsJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment:CommentsJsonInterface;
  constructor() {}
}
