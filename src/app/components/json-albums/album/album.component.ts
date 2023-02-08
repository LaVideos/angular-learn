import {Component, Input} from '@angular/core';
import {AlbumsJsonInterface} from "../../../interfaces";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent {
  @Input()
  album:AlbumsJsonInterface;
  constructor() {}
}
