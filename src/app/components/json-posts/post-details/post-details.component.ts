import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsJsonInterface} from "../../../interfaces";
import {PostsService} from "../../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  post:PostsJsonInterface;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private postsService:PostsService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId})=>{
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];
      if (!this.post){
        this.postsService.getPostById(postId).subscribe(value => this.post = value);
      }
    })
  }

}
