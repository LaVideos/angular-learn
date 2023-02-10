import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UsersJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user:UsersJsonInterface;
  @Output()
  lift = new EventEmitter<UsersJsonInterface>();
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}

  click($event: MouseEvent):void {
    this.lift.emit(this.user)
  }

  getFullAddress() {
    this.router.navigate([this.user.id],{relativeTo:this.activatedRoute,state:{user:this.user}})
  }
}
