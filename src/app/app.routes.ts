import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { userListRoute } from './users/user-list/user-list.routes'
import { albumRoute } from './albums/album/album.routes'

const appRoutes: Routes = [...userListRoute, ...albumRoute]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
