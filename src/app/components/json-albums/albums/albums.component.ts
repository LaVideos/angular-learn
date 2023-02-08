import {Component, OnInit} from '@angular/core';
import {AlbumsJsonInterface} from "../../../interfaces";
import {AlbumsService} from "../../../services";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums:AlbumsJsonInterface[];

  constructor(private albumsService:AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAll().subscribe(value => this.albums = value);
  }



}
