import { Injectable } from '@angular/core';
import { RepeatEnum } from './repeat.enum';
import { PlayerEnum } from './player.enum';

@Injectable()
export class AudioPlayerStateService {
  public repeatState: RepeatEnum;
  public playerState: PlayerEnum;

  constructor() {
    this.repeatState = RepeatEnum.REPEAT;
    this.playerState = PlayerEnum.PAUSED;
  }
}
