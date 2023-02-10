import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentsJsonInterface} from "../interfaces";
import {BASE_URL, ENDPOINTS} from "../constants";

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<CommentsJsonInterface[]>{return this.httpClient.get<CommentsJsonInterface[]>(BASE_URL+ENDPOINTS.COMMENTS)};
  getCommentById(id:number):Observable<CommentsJsonInterface>{return this.httpClient.get<CommentsJsonInterface>(BASE_URL+ENDPOINTS.COMMENTS+'/'+id)}
}
