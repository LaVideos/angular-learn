import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAlbums} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  @Input()
  album:IAlbums;
  show:boolean = false
  @Output()
  lift = new EventEmitter<IAlbums>();

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {}

  showUserId() {
    this.show = !this.show
  }

  liftId() {
  this.lift.emit(this.album);
  }

  showAllData() {
    this.router.navigate([this.album.id],{relativeTo:this.activatedRoute,state:{album:this.album}})
  }
}
