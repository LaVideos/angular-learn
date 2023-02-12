import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../../../../interfaces";
import {PostService} from "../../../services/post-service/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts:IPosts[];

  selectedPost:IPosts

  constructor(private postService:PostService) {  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(value => this.posts = value);
  }


  getSelectedPost($event: IPosts) {
    this.selectedPost = $event
  }
}
