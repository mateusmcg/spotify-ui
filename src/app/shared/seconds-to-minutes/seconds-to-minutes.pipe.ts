import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class SecondsToMinutesPipe implements PipeTransform {
  transform(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);

    return minutes + ':' + (seconds - minutes * 60);
  }
}
