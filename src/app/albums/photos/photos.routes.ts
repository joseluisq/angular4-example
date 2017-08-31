import { Routes } from '@angular/router'
import { PhotosComponent } from './photos.component'

export const photoRoute: Routes = [
  { path: 'albums/:id/photos', component: PhotosComponent }
]
