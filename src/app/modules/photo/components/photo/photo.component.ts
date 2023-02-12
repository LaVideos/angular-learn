import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPhoto} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{
  @Input()
  photo:IPhoto;
  show:boolean = false;
  @Output()
  lift = new EventEmitter<IPhoto>();

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {}

  showUrl() {
    this.show = !this.show
  }

  liftId() {
    this.lift.emit(this.photo)
  }

  showAllData() {
    this.router.navigate([this.photo.id],{relativeTo:this.activatedRoute,state:{photo:this.photo}})
  }
}
