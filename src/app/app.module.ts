import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { UserComponents } from './users/user.components'

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ...UserComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
