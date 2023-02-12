import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../../../../interfaces";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {PostService} from "../../../services/post-service/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  post:IPosts;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private postService:PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];
      if(!this.post){
        this.postService.getPostById(id).subscribe(value => this.post = value);
      }
    })
  }


}
