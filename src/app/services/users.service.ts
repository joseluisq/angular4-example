import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { User } from '../app.types'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UsersService {
  private URL = 'https://jsonplaceholder.typicode.com/users'

  constructor (private http: Http) {}

  /**
   * Get all users from data source
   */
  getUsers (): Promise<User[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
