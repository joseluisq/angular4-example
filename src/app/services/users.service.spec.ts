import { TestBed as TestSuite, inject } from '@angular/core/testing'
import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from '@angular/http'
import { UsersService } from '../services/users.service'
import { MockUsers } from './users.mock'
import { MockBackend, MockConnection } from '@angular/http/testing'
import { User } from '../app.types'

describe('Service testing: User', () => {
  beforeEach(() => {
    TestSuite.configureTestingModule({
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
      ]
    })
  })

  it(
    'should create a the service',
    inject([UsersService], (service: UsersService) => {
      expect(service).toBeTruthy()
    })
  )

  it(
    'should return all users from the data source',
    inject(
      [UsersService, MockBackend],
      (service: UsersService, backend: MockBackend) => {
        const response = new ResponseOptions({
          body: JSON.stringify(MockUsers)
        })

        const baseResponse = new Response(response)

        backend.connections.subscribe((c: MockConnection) =>
          c.mockRespond(baseResponse)
        )

        return service.getUsers().then((data: User[]) => {
          expect(data).toEqual(MockUsers)
        })
      }
    )
  )
})
