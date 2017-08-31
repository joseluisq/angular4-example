import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Album } from '../app.types'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AlbumsService {
  private URL = 'https://jsonplaceholder.typicode.com/users'

  constructor (private http: Http) {}

  /**
   * Get all albums by `userId` from data source.
   */
  getAlbumsByUserId (userId: number): Promise<Album[]> {
    return this.http
      .get(`${this.URL}/${userId}/albums`)
      .toPromise()
      .then(response => response.json() as Album[])
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
