import {Routes} from "@angular/router";
import {UsersComponent} from "../components/json-user/users/users.component";
import {UserDetailsComponent} from "../components/json-user/user-details/user-details.component";

export const userRoutes: Routes = [
  {path:'',component:UsersComponent,
    children:[{path:':id',component:UserDetailsComponent}]}
];
