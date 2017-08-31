import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Album } from '../app.types'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AlbumsService {
  private URL = 'https://jsonplaceholder.typicode.com'

  constructor (private http: Http) {}

  /**
   * Get all albums by `userId` from data source.
   */
  getAlbumsByUserId (userId: number): Promise<Album[]> {
    return this.http
      .get(`${this.URL}/users/${userId}/albums`)
      .toPromise()
      .then(response => response.json() as Album[])
      .catch(this.handleError)
  }

  /**
   * Get one Album by id from data source
   */
  getAlbumById (id: number): Promise<Album> {
    return this.http
      .get(`${this.URL}/albums/${id}`)
      .toPromise()
      .then(response => response.json() as Album)
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
