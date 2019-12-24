import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { DetailsComponent } from './details/details.component';
import { SearchCardComponent } from './card/search-card.component';

@NgModule({
  declarations: [SearchComponent, DetailsComponent, SearchCardComponent],
  imports: [CommonModule, SearchRoutingModule]
})
export class SearchModule {}
