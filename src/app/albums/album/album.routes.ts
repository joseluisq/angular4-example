import { Routes } from '@angular/router'
import { AlbumComponent } from './album.component'

export const albumRoute: Routes = [
  { path: 'user/:id/albums', component: AlbumComponent }
]
