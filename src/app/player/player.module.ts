import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from './player.component';
import { MusicComponent } from './music/music.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { ConfigsComponent } from './configs/configs.component';
import { AudioPlayerStateService } from './audio-player/audio-player-state.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlayerComponent,
    MusicComponent,
    AudioPlayerComponent,
    ConfigsComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [AudioPlayerStateService],
  exports: [PlayerComponent]
})
export class PlayerModule {}
