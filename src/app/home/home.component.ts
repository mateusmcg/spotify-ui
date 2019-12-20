import { Component, OnInit } from '@angular/core';
import { Content } from './content/content.model';
import { HomeService } from './home.service';

@Component({
  selector: 'spotify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contents: Content[];

  constructor(private homeService: HomeService) {}

  public ngOnInit(): void {
    this.contents = this.homeService.getContents();
  }
}
