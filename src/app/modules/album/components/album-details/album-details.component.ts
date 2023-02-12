import {Component, OnInit} from '@angular/core';
import {IAlbums} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumsService} from "../../services";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  album:IAlbums;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private albumsService:AlbumsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.album = this.router.getCurrentNavigation()?.extras.state?.['album'];
      if(!this.album){
        this.albumsService.getAlbumById(id).subscribe(value => this.album = value)
      }
    })
  }


}
