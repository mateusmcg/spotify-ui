import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [SideNavComponent, LogoComponent, MenuComponent, PlaylistComponent],
  imports: [CommonModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
