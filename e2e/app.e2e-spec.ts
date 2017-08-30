import { AppPage } from './app.po'

describe('Testing web page', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display the title of the page', () => {
    page.navigateTo()

    expect(page.getTitle()).toEqual('Angular 4 demo!')
  })
})
