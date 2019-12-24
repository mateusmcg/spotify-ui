import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SearchCard } from './card/search-card.model';

@Component({
  selector: 'spotify-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public slideCards: SearchCard[];

  public genreCards: SearchCard[];

  constructor(private searchService: SearchService) {}

  public ngOnInit(): void {
    this.slideCards = this.searchService.getGenresSlide();
    this.genreCards = this.searchService.getGenres();
  }
}
