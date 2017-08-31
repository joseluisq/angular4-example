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
import { MockPhotos } from '../../services/photos.mock'
import { PhotosComponent } from './photos.component'
import { photoRoute } from './photos.routes'
import { AppComponent } from '../../app.component'
import { AlbumsService } from '../../services/albums.service'
import { UsersService } from '../../services/users.service'
import { Photo } from '../../app.types'

describe('Testing Photos component', () => {
  let fixture: ComponentFixture<AppComponent>
  let location: Location
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule.withRoutes(photoRoute)],
      declarations: [AppComponent, PhotosComponent],
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

  // Get the first Photo
  const Photo: Photo[] = MockPhotos

  it('should contain all Photo data', () => {
    expect(Photo).toBeTruthy()
    expect(Photo.length).toBeGreaterThan(0)
  })

  it(
    'shoud be the Photo navigation /albums/71/photos',
    fakeAsync(() => {
      router.navigate(['albums/71/photos'])
      tick()

      expect(location.path()).toBe('/albums/71/photos')
    })
  )

  it(
    'shoud be contain the photos component',
    fakeAsync(() => {
      router.navigate(['albums/71/photos'])
      tick()

      const el = fixture.nativeElement
      const content = el.querySelector('app-photos').textContent
      expect(content).toContain('Photos of Album')
    })
  )
})
