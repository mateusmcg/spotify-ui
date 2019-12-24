import { Injectable } from '@angular/core';
import { SearchCard } from './card/search-card.model';
import { SearchCardType } from './card/search-card-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  public getGenresSlide(): SearchCard[] {
    return [
      { type: SearchCardType.BIG, title: 'Pop' },
      { type: SearchCardType.BIG, title: 'Eletrônica / Dance' },
      { type: SearchCardType.BIG, title: 'Rock' },
      { type: SearchCardType.BIG, title: 'Hip Hop' }
    ];
  }

  public getGenres(): SearchCard[] {
    return [
      { type: SearchCardType.SMALL, title: 'Podcasts' },
      { type: SearchCardType.SMALL, title: 'Feito para você' },
      { type: SearchCardType.SMALL, title: 'Paradas' },
      { type: SearchCardType.SMALL, title: 'Novos lançamentos' },
      { type: SearchCardType.SMALL, title: 'Descobrir' },
      { type: SearchCardType.SMALL, title: 'Wrapped 2019' },
      { type: SearchCardType.SMALL, title: 'Brasil' },
      { type: SearchCardType.SMALL, title: 'Funk' },
      { type: SearchCardType.SMALL, title: 'Sertanejo' },
      { type: SearchCardType.SMALL, title: 'Boas festas' },
      { type: SearchCardType.SMALL, title: 'Cristã' },
      { type: SearchCardType.SMALL, title: 'Samba & Pagode' },
      { type: SearchCardType.SMALL, title: 'Verão' },
      { type: SearchCardType.SMALL, title: 'Seu astral' },
      { type: SearchCardType.SMALL, title: 'MPB' },
      { type: SearchCardType.SMALL, title: 'Cities' },
      { type: SearchCardType.SMALL, title: 'Em alta' },
      { type: SearchCardType.SMALL, title: 'Relax' },
      { type: SearchCardType.SMALL, title: 'Wellness' },
      { type: SearchCardType.SMALL, title: 'Tastemakers' },
      { type: SearchCardType.SMALL, title: 'Festa' },
      { type: SearchCardType.SMALL, title: 'Rock' },
      { type: SearchCardType.SMALL, title: 'Hip Hop' },
      { type: SearchCardType.SMALL, title: 'Eletrônica / Dance' },
      { type: SearchCardType.SMALL, title: 'Indie' },
      { type: SearchCardType.SMALL, title: 'Malhação' },
      { type: SearchCardType.SMALL, title: 'K-pop' },
      { type: SearchCardType.SMALL, title: 'Romântico' },
      { type: SearchCardType.SMALL, title: 'Para dormir' },
      { type: SearchCardType.SMALL, title: 'Música Latina' },
      { type: SearchCardType.SMALL, title: 'Artistas' },
      { type: SearchCardType.SMALL, title: 'Hora de comer' },
      { type: SearchCardType.SMALL, title: 'Foco' },
      { type: SearchCardType.SMALL, title: 'Soul' },
      { type: SearchCardType.SMALL, title: 'Viagem' },
      { type: SearchCardType.SMALL, title: 'Clássico' },
      { type: SearchCardType.SMALL, title: 'R&B' },
      { type: SearchCardType.SMALL, title: 'Décadas' },
      { type: SearchCardType.SMALL, title: 'Reggae' },
      { type: SearchCardType.SMALL, title: 'Jazz' },
      { type: SearchCardType.SMALL, title: 'Crianças e família' },
      { type: SearchCardType.SMALL, title: 'Arab' },
      { type: SearchCardType.SMALL, title: 'Afro' },
      { type: SearchCardType.SMALL, title: 'J-pop' },
      { type: SearchCardType.SMALL, title: 'Música Indiana' },
      { type: SearchCardType.SMALL, title: 'Spotify Singles' },
      { type: SearchCardType.SMALL, title: 'Blues' },
      { type: SearchCardType.SMALL, title: 'Punk' },
      { type: SearchCardType.SMALL, title: 'Metal' },
      { type: SearchCardType.SMALL, title: 'Folk & acústico' },
      { type: SearchCardType.SMALL, title: 'Humor' },
      { type: SearchCardType.SMALL, title: 'Trilhas Sonoras' },
      { type: SearchCardType.SMALL, title: 'Jogos' },
      { type: SearchCardType.SMALL, title: 'Anime' }
    ];
  }
}
