import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsJsonInterface, UsersJsonInterface} from "../interfaces";
import {BASE_URL, ENDPOINTS} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<PostsJsonInterface[]>{return this.httpClient.get<PostsJsonInterface[]>(BASE_URL+ENDPOINTS.POSTS)};
  getPostById(postId:number):Observable<PostsJsonInterface>{return this.httpClient.get<PostsJsonInterface>(BASE_URL+ENDPOINTS.POSTS + "/" + postId)}
}
