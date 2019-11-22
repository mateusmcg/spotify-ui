import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SideNavComponent, LogoComponent, MenuComponent, PlaylistComponent, FooterComponent],
  imports: [CommonModule],
  exports: [SideNavComponent]
})
export class SideNavModule {}
