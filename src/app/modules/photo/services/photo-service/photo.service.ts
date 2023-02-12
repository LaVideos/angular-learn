import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPhoto} from "../../../../interfaces";
import {Observable} from "rxjs";
import {API_URL} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPhoto[]>{return this.httpClient.get<IPhoto[]>(API_URL.PHOTOS)}
  getPhotoById(id:number):Observable<IPhoto>{return this.httpClient.get<IPhoto>(API_URL.PHOTOS+'/'+id)}
}
