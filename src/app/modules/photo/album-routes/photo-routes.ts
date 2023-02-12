import {Routes} from "@angular/router";
import {AlbumsComponent} from "../../album/components/albums/albums.component";
import {PhotosComponent} from "../components/photos/photos.component";
import {PhotoDetailComponent} from "../components/photo-detail/photo-detail.component";

export const PhotoRoutes:Routes=[
  {path:'',component:PhotosComponent,children:[
      {path:':id',component:PhotoDetailComponent}
    ]}
]
