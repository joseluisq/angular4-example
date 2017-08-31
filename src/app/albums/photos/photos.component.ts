import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AlbumsService } from '../../services/albums.service'
import { PhotosService } from '../../services/photos.service'
import { Album, Photo } from '../../app.types'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  providers: [PhotosService, AlbumsService]
})
export class PhotosComponent implements OnInit {
  title = 'Photos Component'
  sub: any
  photos: Photo[]
  selectedPhoto: Photo
  selectedAlbum: Album

  constructor (
    private service: PhotosService,
    private albumService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.sub = this.route.params.subscribe(params => {
      const id: number = params['id']

      this.albumService.getAlbumById(id).then(album => {
        if (album) {
          this.selectedAlbum = album

          this.service
            .getPhotosByAlbumId(id)
            .then(photos => (this.photos = photos))
        }
      })
    })
  }

  onSelect (photo: Photo): void {
    this.selectedPhoto = photo
  }
}
