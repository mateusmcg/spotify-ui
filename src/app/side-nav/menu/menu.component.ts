import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'spotify-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }

  public ngOnInit(): void {
    this.buildMenuItems();
  }

  private buildMenuItems(): void {
    this.menuItems = [
      {
        active: true,
        name: 'Início',
        icon: 'home'
      },
      {
        active: false,
        name: 'Buscar',
        icon: 'search'
      },
      {
        active: false,
        name: 'Sua Biblioteca',
        icon: 'list'
      }
    ];
  }
}
