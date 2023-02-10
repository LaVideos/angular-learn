import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlbumsJsonInterface} from "../interfaces";
import {Observable} from "rxjs";
import {BASE_URL, ENDPOINTS} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<AlbumsJsonInterface[]>{return this.httpClient.get<AlbumsJsonInterface[]>(BASE_URL+ENDPOINTS.ALBUMS)};
  getAlbumId(id:number):Observable<AlbumsJsonInterface>{return this.httpClient.get<AlbumsJsonInterface>(BASE_URL+ENDPOINTS.ALBUMS + '/' + id)};
}
