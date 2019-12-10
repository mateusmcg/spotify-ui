import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryModule' },
  {
    path: 'playlist',
    loadChildren: './playlist/playlist.module#PlaylistModule'
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'spotify-ui', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
