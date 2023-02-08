import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhotoJsonInterface} from "../interfaces";
import {BASE_URL, ENDPOINTS} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<PhotoJsonInterface[]>{
    return this.httpClient.get<PhotoJsonInterface[]>(BASE_URL+ENDPOINTS.PHOTOS)
  }
}
