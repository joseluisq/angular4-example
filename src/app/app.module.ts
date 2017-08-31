import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { UserComponents } from './users/user.components'
import { AlbumComponents } from './albums/album.components'

import { routing } from './app.routes'

@NgModule({
  imports: [BrowserModule, HttpModule, routing],
  declarations: [AppComponent, ...UserComponents, ...AlbumComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
