import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from './player.component';
import { MusicComponent } from './music/music.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { ConfigsComponent } from './configs/configs.component';

@NgModule({
  declarations: [
    PlayerComponent,
    MusicComponent,
    AudioPlayerComponent,
    ConfigsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [PlayerComponent]
})
export class PlayerModule {}
