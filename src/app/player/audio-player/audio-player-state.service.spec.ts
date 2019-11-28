import { TestBed } from '@angular/core/testing';

import { AudioPlayerStateService } from './audio-player-state.service';

describe('AudioPlayerStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioPlayerStateService = TestBed.get(AudioPlayerStateService);
    expect(service).toBeTruthy();
  });
});
