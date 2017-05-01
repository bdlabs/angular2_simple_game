import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from "./compo/game/game.component";
import { GameSelectorDirectives } from './directives/gameselector.directives'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameSelectorDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
