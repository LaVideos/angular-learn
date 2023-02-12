import {Component, OnInit} from '@angular/core';
import {IPhoto} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../../services";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo: IPhoto;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.photo = this.router.getCurrentNavigation()?.extras.state?.['photo'];
      if (!this.photo) {
        this.photoService.getPhotoById(id).subscribe(value => this.photo = value);
      }
    })
  }

}
