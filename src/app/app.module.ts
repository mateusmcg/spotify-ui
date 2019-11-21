import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SideNavModule, PlayerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
