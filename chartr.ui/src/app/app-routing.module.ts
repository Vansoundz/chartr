import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { AddSongComponent } from './components/add-song/add-song.component';

const routes: Routes = [
  {
    path: '',
    component: SongsListComponent
  },
  {
    path: 'add-song',
    component: AddSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
