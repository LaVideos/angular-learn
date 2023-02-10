import {Component, OnInit} from '@angular/core';
import {AlbumsJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumsService} from "../../../services";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  album:AlbumsJsonInterface;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private albumsService:AlbumsService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.album = this.router.getCurrentNavigation()?.extras.state?.['album'];
      if(!this.album){
        this.albumsService.getAlbumId(id).subscribe(value => this.album = value);
      }
    })
  }

}
