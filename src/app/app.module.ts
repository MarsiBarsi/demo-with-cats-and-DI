import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsCardsComponent } from './cats-cards/cats-cards.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatsImagesService } from './services/cats-images.service';
import { MY_TOKEN } from './tokens/myToken';
import { ARE_THERE_CATS } from './tokens/areThereCats';

@NgModule({
  declarations: [AppComponent, CatsCardsComponent, CatsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // не пишем здесь объект с provide, так как класс — самая популярная форма записи, ангуляр её понимает самостоятельно
    CatsImagesService,
    {
      provide: MY_TOKEN,
      useValue: 'Хоба, токен с уровня модуля'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
