import {Component, Input} from '@angular/core';
import {PostsJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post:PostsJsonInterface
  constructor() {}
}
