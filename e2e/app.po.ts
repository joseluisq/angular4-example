import { browser, by, element as $ } from 'protractor'

export class AppPage {
  navigateTo () {
    return browser.get('/')
  }

  getParagraphText () {
    return $(by.css('app-root h1')).getText()
  }
}
