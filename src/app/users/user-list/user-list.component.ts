import { Component, OnInit } from '@angular/core'
import { User } from '../user/user.type'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UsersService]
})
export class UserListComponent implements OnInit {
  title = 'User List Component'
  users: User[]

  constructor (private usersService: UsersService) {}

  ngOnInit (): void {
    this.usersService.getUsers().then(users => (this.users = users))
  }
}
