import {
  ComponentFixture,
  TestBed,
  getTestBed,
  async
} from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { UserListComponent } from '../user-list/user-list.component'
import { MockUsers } from '../../services/users.mock'
import { UsersService } from '../../services/users.service'
import { User } from '../../app.types'
import {
  BaseRequestOptions,
  Http,
  HttpModule,
  Response,
  ResponseOptions
} from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'

describe('Testing User List component', () => {
  let fixture: ComponentFixture<UserListComponent>
  let userService: UsersService
  let el: any

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        UsersService,
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
      imports: [HttpModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  // Get the first user
  const users: User[] = MockUsers

  it('should contain all data', () => {
    expect(users).toBeTruthy()
    expect(users.length).toBeGreaterThan(0)
  })

  it(
    'should contain the items in the component list',
    async(() => {
      getTestBed()
        .compileComponents()
        .then(() => {
          // get a reference to the mock backend so we can respond with
          // fake data when it is fetched with Http.get
          const mockBackend = getTestBed().get(MockBackend)

          // provide the fake response (connection is an observable that
          // notifies the subscriber every time a request becomes pending
          // and allows the subscriber to respond with a fake answer)
          mockBackend.connections.subscribe(
            (c: MockConnection) => {
              // our fake response:
              c.mockRespond(
                new Response(
                  new ResponseOptions({
                    body: JSON.stringify(MockUsers)
                  })
                )
              )
            } // end of subscribe onNext method
          )

          fixture = getTestBed().createComponent(UserListComponent)
          userService = TestBed.get(UsersService)
          el = fixture.nativeElement

          fixture.componentInstance.ngOnInit()
          const content = el.textContent

          fixture.detectChanges()

          expect(content).toContain('User List')
        })
    })
  )
})
