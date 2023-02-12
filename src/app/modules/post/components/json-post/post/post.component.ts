import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPosts} from "../../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post:IPosts;
  show:boolean = false;
  @Output()
  lift = new EventEmitter<IPosts>();

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  showBody() {
    this.show = !this.show;
  }

  liftId():void {
    this.lift.emit(this.post)
  }

  showAllData() {
    this.router.navigate([this.post.id],{relativeTo:this.activatedRoute,state:{post:this.post}})
  }
}
