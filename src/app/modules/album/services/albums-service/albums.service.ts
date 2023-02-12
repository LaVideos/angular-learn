import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAlbums} from "../../../../interfaces";
import {Observable} from "rxjs";
import {API_URL} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IAlbums[]>{return this.httpClient.get<IAlbums[]>(API_URL.ALBUMS)};
  getAlbumById(id:number):Observable<IAlbums>{return this.httpClient.get<IAlbums>(API_URL.ALBUMS + '/' + id)}
}
