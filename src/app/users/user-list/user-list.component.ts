import { Component, OnInit } from '@angular/core'
import { User } from '../user/user.type'
import { UserService } from '../../services/data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  title = 'User List Component'
  users: User[]

  constructor (private userService: UserService) {}

  ngOnInit (): void {
    this.userService.getUsers().then(users => (this.users = users))
  }
}
