import { browser, by, element as $ } from 'protractor'

export class AppPage {

  navigateTo (url = '/') {
    return browser.get(url)
  }

  getTitle () {
    return $(by.css('app-root h1')).getText()
  }

  getUsers () {
    return $(by.css('app-root h1')).getText()
  }

}
