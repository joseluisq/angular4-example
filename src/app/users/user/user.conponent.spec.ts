import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { UserComponent } from './user.component'
import { MockUsers } from '../../services/users.mock'
import { User } from '../../users/user/user.type'

describe('Testing User component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  // Get the first user
  const user: User = MockUsers[0]

  it('should contain the first User data', () => {
    expect(user).toBeTruthy()
    expect(user.id).toEqual(1)
  })

  it('should contain the first User element', () => {
    const fixture: ComponentFixture<UserComponent> = TestBed.createComponent(
      UserComponent
    )

    const comp: UserComponent = fixture.componentInstance
    comp.user = user

    fixture.detectChanges()

    const $el = fixture.nativeElement

    expect(comp).toBeTruthy()
    expect($el).toBeTruthy()
    expect($el.textContent).toContain('1', 'Leanne Graham')
  })
})
