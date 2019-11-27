import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spotify-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {
  public volumeLevel = 50;

  private volumeLevelBeforeMute = this.volumeLevel;

  constructor() {}

  public ngOnInit(): void {}

  public onMute(): void {
    if (this.volumeLevel === 0) {
      this.volumeLevel = this.volumeLevelBeforeMute;

      return;
    }

    this.volumeLevelBeforeMute = this.volumeLevel;
    this.volumeLevel = 0;
  }

  // public lessThan(left: number, right: number): boolean {
  //   return left < right;
  // }
}
