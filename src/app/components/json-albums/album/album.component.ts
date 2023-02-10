import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlbumsJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent {
  @Input()
  album:AlbumsJsonInterface;
  @Output()
  lift = new EventEmitter<AlbumsJsonInterface>;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {}
  click($event: MouseEvent) {this.lift.emit(this.album);};
  getAlbumDetail() {
    this.router.navigate([this.album.id],{relativeTo:this.activatedRoute,state:{album:this.album}});}
}
