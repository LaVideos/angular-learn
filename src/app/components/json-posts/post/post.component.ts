import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PostsJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post:PostsJsonInterface

  @Output()
  lift = new EventEmitter<PostsJsonInterface>;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private postsService:PostsService) {}

  click($event: MouseEvent) {
    this.lift.emit(this.post)
  }

  getAllData() {
    this.router.navigate([this.post.id],{relativeTo:this.activatedRoute,state:{post:this.post}})
  }
}
