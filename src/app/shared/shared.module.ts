import { NgModule } from '@angular/core';
import { SecondsToMinutesPipe } from './seconds-to-minutes/seconds-to-minutes.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SecondsToMinutesPipe, CardComponent],
  imports: [],
  exports: [SecondsToMinutesPipe, CardComponent]
})
export class SharedModule {}
