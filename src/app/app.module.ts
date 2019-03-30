import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsCardsComponent } from './cats-cards/cats-cards.component';
import { CatsListComponent } from './cats-list/cats-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsCardsComponent,
    CatsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
