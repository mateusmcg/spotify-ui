import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { MusicComponent } from './music/music.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { ConfigsComponent } from './configs/configs.component';

@NgModule({
  declarations: [PlayerComponent, MusicComponent, AudioPlayerComponent, ConfigsComponent],
  imports: [CommonModule],
  exports: [PlayerComponent]
})
export class PlayerModule {}
