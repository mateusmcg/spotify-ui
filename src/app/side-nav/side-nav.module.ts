import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [SideNavComponent, LogoComponent, MenuComponent],
  imports: [CommonModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
