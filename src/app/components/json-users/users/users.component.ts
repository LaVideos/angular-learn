import {Component, OnInit} from '@angular/core';
import {UsersJsonInterface} from "../../../interfaces";
import {UserService} from "../../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit{
  users:UsersJsonInterface[];
  constructor( private userService:UserService) {}
  ngOnInit(): void {this.userService.getAll().subscribe(value => this.users = value);}
}
