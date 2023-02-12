import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodos} from "../../../../interfaces";
import {API_URL} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ITodos[]>{return this.httpClient.get<ITodos[]>(API_URL.TODOS)};
  getTodoById(id:number):Observable<ITodos>{return this.httpClient.get<ITodos>(API_URL.TODOS+'/'+id)}
}
