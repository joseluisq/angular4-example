import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AlbumsService } from '../../services/albums.service'
import { UsersService } from '../../services/users.service'
import { Album, User } from '../../app.types'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [AlbumsService, UsersService]
})
export class AlbumComponent implements OnInit {
  title = 'Album Component'
  sub: any
  albums: Album[]
  selectedAlbum: Album
  selectedUser: User

  constructor (
    private service: AlbumsService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.sub = this.route.params.subscribe(params => {
      const id: number = params['id']

      this.userService.getUserById(id).then(user => {
        if (user) {
          this.selectedUser = user
          this.service
            .getAlbumsByUserId(id)
            .then(albums => (this.albums = albums))
        }
      })
    })
  }

  onSelect (album: Album): void {
    this.selectedAlbum = album
  }
}
