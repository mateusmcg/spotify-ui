import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spotify-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public subTitle: string;

  constructor() {}

  public ngOnInit(): void {}
}
