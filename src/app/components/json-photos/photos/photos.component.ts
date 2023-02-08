import {Component, OnInit} from '@angular/core';
import {PhotoJsonInterface} from "../../../interfaces";
import {PhotosService} from "../../../services";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{

  photos:PhotoJsonInterface[];

  constructor(private photosService:PhotosService) {}

  ngOnInit(): void {
    this.photosService.getAll().subscribe(value => this.photos = value);
  }

}
