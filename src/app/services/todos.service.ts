import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodosJsonInterface} from "../interfaces";
import {Observable} from "rxjs";
import {BASE_URL, ENDPOINTS} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<TodosJsonInterface[]>{
    return this.httpClient.get<TodosJsonInterface[]>(BASE_URL+ENDPOINTS.TODOS)
  }
}
