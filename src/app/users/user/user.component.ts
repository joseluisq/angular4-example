import { Component, Input } from '@angular/core'
import { User } from './user.type'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() user: User

  title = 'User Component'
  selectedUser: User

  onSelect (user: User): void {
    this.selectedUser = user
  }
}
