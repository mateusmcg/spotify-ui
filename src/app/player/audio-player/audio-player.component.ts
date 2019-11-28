import { Component, OnInit } from '@angular/core';
import { AudioPlayerStateService } from './audio-player-state.service';
import { PlayerEnum } from './player.enum';
import { RepeatEnum } from './repeat.enum';
import { AudioPlayer } from './audio-player.model';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'spotify-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  public music: AudioPlayer;

  private musicPlayer: Subscription;

  constructor(public audioPlayerStateService: AudioPlayerStateService) {
    this.music = {
      musicCurrentSecond: 51,
      musicLength: 218
    };
  }

  public get PlayerEnum(): typeof PlayerEnum {
    return PlayerEnum;
  }

  public get RepeatEnum(): typeof RepeatEnum {
    return RepeatEnum;
  }

  public ngOnInit(): void {}

  public onPlay(): void {
    this.audioPlayerStateService.playerState = PlayerEnum.PLAYING;
    this.musicPlayer = interval(1000).subscribe(() => {
      this.music.musicCurrentSecond++;
    });
  }

  public onPause(): void {
    this.audioPlayerStateService.playerState = PlayerEnum.PAUSED;
    this.musicPlayer.unsubscribe();
  }

  public onRepeat(): void {
    this.audioPlayerStateService.repeatState = RepeatEnum.REPEAT_ONE;
  }

  public onRepeatOnce(): void {
    this.audioPlayerStateService.repeatState = RepeatEnum.REPEAT;
  }
}
