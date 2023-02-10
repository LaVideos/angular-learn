import {Component, OnInit} from '@angular/core';
import {PhotoJsonInterface} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotosService} from "../../../services";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit{
  photo:PhotoJsonInterface;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private photosService:PhotosService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.photo = this.router.getCurrentNavigation()?.extras.state?.['photo'];
      if(!this.photo){
        this.photosService.getPhotoById(id).subscribe(value => this.photo = value);
      }
    })
  }



}
