import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../../../constants";
import {IPosts} from "../../../../interfaces";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPosts[]>{return this.httpClient.get<IPosts[]>(API_URL.POSTS)};
  getPostById(id:number):Observable<IPosts>{return this.httpClient.get<IPosts>(API_URL.POSTS + '/' + id)}
}
