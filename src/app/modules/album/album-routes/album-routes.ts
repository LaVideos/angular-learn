import {Routes} from "@angular/router";
import {AlbumsComponent} from "../components/albums/albums.component";
import {AlbumDetailsComponent} from "../components/album-details/album-details.component";

export const albumRoutes:Routes = [
  {path:'',component:AlbumsComponent,children:[
      {path:':id',component:AlbumDetailsComponent}
    ]}
]
