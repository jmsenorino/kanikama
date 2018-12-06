import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { GameComponent } from './game/game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerStatusBarComponent } from './player-status-bar/player-status-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    GameComponent,
    PlayerStatusBarComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
