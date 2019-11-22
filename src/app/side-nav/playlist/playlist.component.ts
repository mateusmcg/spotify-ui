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
      { name: 'v3', active: false },
      { name: 'Tomorrowland Official Playlist', active: false },
      { name: 'No Repeat', active: false },
      { name: 'Descobertas da Semana', active: false },
      { name: 'Retrôvisor', active: false },
      { name: 'Songs to Sing in the Car', active: false },
      { name: 'Road trip', active: false },
      { name: 'sing', active: false },
      { name: 'Brasil Anos 2000', active: false },
      { name: 'EMINEM BEST OF', active: false },
      { name: 'Good Lyrics', active: false },
      { name: 'Good Lyrics v2', active: false },
      { name: 'Female Vocal Dubstep', active: false },
      { name: 'Motivacional', active: false }
    ];
  }

  public selectPlaylist(selectedPlaylist: Playlist): void {
    this.playlists.forEach((playlist: Playlist) => (playlist.active = false));
    selectedPlaylist.active = true;
  }
}
