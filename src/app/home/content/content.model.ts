import { Card } from 'src/app/shared/card/card.model';

export interface Content {
  title: string;
  subTitle?: string;
  cards: Card[];
}
