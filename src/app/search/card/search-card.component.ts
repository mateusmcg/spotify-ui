import { Component, OnInit, Input } from '@angular/core';
import { SearchCardType } from './search-card-type.enum';
import { SearchCard } from './search-card.model';

@Component({
  selector: 'spotify-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  @Input()
  public card: SearchCard;

  public get SearchCardType(): typeof SearchCardType {
    return SearchCardType;
  }

  constructor() {}

  public ngOnInit(): void {
    console.log(this.card);
  }
}
