import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../../../interfaces";
import {API_URL} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IUser[]>{return this.httpClient.get<IUser[]>(API_URL.USERS)};
  getById(id:number):Observable<IUser>{return this.httpClient.get<IUser>(API_URL.USERS+'/'+id)}
}
