import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../../../interfaces";
import {API_URL} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IComment[]>{return this.httpClient.get<IComment[]>(API_URL.COMMENTS)};
  getCommentById(id:number):Observable<IComment>{return this.httpClient.get<IComment>(API_URL.COMMENTS + '/'+id)}
}
