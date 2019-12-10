import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist.model';

@Component({
  selector: 'spotify-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  public playlists: Playlist[];

  constructor() {
    this.playlists = [];
  }

  public ngOnInit(): void {
    this.playlists = [
      { id: 1, name: 'v3', active: false },
      { id: 2, name: 'Tomorrowland Official Playlist', active: false },
      { id: 3, name: 'No Repeat', active: false },
      { id: 4, name: 'Descobertas da Semana', active: false },
      { id: 5, name: 'Retrôvisor', active: false },
      { id: 6, name: 'Songs to Sing in the Car', active: false },
      { id: 7, name: 'Road trip', active: false },
      { id: 8, name: 'sing', active: false },
      { id: 9, name: 'Brasil Anos 2000', active: false },
      { id: 10, name: 'EMINEM BEST OF', active: false },
      { id: 11, name: 'Good Lyrics', active: false },
      { id: 12, name: 'Good Lyrics v2', active: false },
      { id: 13, name: 'Female Vocal Dubstep', active: false },
      { id: 14, name: 'Motivacional', active: false }
    ];
  }

  public selectPlaylist(selectedPlaylist: Playlist): void {
    this.playlists.forEach((playlist: Playlist) => (playlist.active = false));
    selectedPlaylist.active = true;
  }
}
