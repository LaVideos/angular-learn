import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PhotoJsonInterface, TodosJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  @Input()
  photo:PhotoJsonInterface;
  @Output()
  lift = new EventEmitter<PhotoJsonInterface>;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {}
  click($event: MouseEvent) {this.lift.emit(this.photo);}

  getPhotoDetail() {
    this.router.navigate([this.photo.id],{relativeTo:this.activatedRoute,state:{photo:this.photo}})
  }
}
