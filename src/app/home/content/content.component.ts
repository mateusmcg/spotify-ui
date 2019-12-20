import { Component, OnInit, Input } from '@angular/core';
import { Content } from './content.model';

@Component({
  selector: 'spotify-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  public content: Content;

  constructor() {}

  ngOnInit() {}
}
