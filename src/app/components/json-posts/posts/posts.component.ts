import {Component, OnInit} from '@angular/core';
import {PostsJsonInterface} from "../../../interfaces";
import {PostsService} from "../../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:PostsJsonInterface[]
  constructor(private postsService:PostsService) {}
  ngOnInit(): void {this.postsService.getAll().subscribe(value => this.posts = value);}
}
