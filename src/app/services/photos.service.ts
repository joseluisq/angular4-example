import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Photo } from '../app.types'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class PhotosService {
  private URL = 'https://jsonplaceholder.typicode.com/albums'

  constructor (private http: Http) {}

  /**
   * Get all photos by `albumId` from data source.
   */
  getPhotosByAlbumId (albumId: number): Promise<Photo[]> {
    return this.http
      .get(`${this.URL}/${albumId}/photos`)
      .toPromise()
      .then(response => response.json() as Photo[])
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
