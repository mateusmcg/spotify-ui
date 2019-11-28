import { NgModule } from '@angular/core';
import { SecondsToMinutesPipe } from './seconds-to-minutes/seconds-to-minutes.pipe';

@NgModule({
  declarations: [SecondsToMinutesPipe],
  imports: [],
  exports: [SecondsToMinutesPipe]
})
export class SharedModule {}
