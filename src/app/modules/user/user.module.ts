import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/json-user/users/users.component';
import { UserComponent } from './components/json-user/user/user.component';
import { UserDetailsComponent } from './components/json-user/user-details/user-details.component';
import {UserService} from "./services/user-service/user.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
