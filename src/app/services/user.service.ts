import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersJsonInterface} from "../interfaces";
import {BASE_URL, ENDPOINTS} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) {}
  getAll():Observable<UsersJsonInterface[]>{return this.httpClient.get<UsersJsonInterface[]>(BASE_URL+ENDPOINTS.USERS)}
  getById(id:number):Observable<UsersJsonInterface> {return this.httpClient.get<UsersJsonInterface>(BASE_URL+ENDPOINTS.USERS+'/'+id)}
}
