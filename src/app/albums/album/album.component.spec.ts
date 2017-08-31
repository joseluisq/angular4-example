import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { BaseRequestOptions, Http, HttpModule } from '@angular/http'
import { MockBackend } from '@angular/http/testing'
import { MockAlbums } from '../../services/albums.mock'
import { AlbumComponent } from './album.component'
import { AppComponent } from '../../app.component'
import { AlbumsService } from '../../services/albums.service'
import { UsersService } from '../../services/users.service'
import { Album } from '../../app.types'
import { albumRoute } from './album.routes'

describe('Testing Album component', () => {
  let fixture: ComponentFixture<AppComponent>
  let location: Location
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule.withRoutes(albumRoute)],
      declarations: [AppComponent, AlbumComponent],
      providers: [
        UsersService,
        AlbumsService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (
            backend: MockBackend,
            defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backend, defaultOptions)
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

    router = TestBed.get(Router)
    location = TestBed.get(Location)

    fixture = TestBed.createComponent(AppComponent)
  })

  // Get the first Album
  const albums: Album[] = MockAlbums

  it('should contain all albums data', () => {
    expect(albums).toBeTruthy()
    expect(albums.length).toBeGreaterThan(0)
  })

  it(
    'shoud be the albums navigation user/10/albums',
    fakeAsync(() => {
      router.navigate(['user/10/albums'])
      tick()

      expect(location.path()).toBe('/user/10/albums')
    })
  )

  it(
    'shoud be contain the album component',
    fakeAsync(() => {
      router.navigate(['user/10/albums'])
      tick()

      const el = fixture.nativeElement
      const content = el.querySelector('app-album').textContent
      expect(content).toContain('Albums by')
    })
  )
})
