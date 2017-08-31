import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { User } from '../app.types'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UsersService {
  private URL = 'https://jsonplaceholder.typicode.com/users'

  constructor (private http: Http) {}

  private user: User
  private users: User[] = []

  /**
   * Get all users from data source
   */
  getUsers (): Promise<User[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(response => {
        this.users = response.json() as User[]
        return this.users
      })
      .catch(this.handleError)
  }

  /**
   * Get one user by id from data source
   */
  getUserById (id: number): Promise<User> {
    return this.http
      .get(`${this.URL}/${id}`)
      .toPromise()
      .then(response => {
        this.user = response.json() as User
        return this.user
      })
      .catch(this.handleError)
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}
