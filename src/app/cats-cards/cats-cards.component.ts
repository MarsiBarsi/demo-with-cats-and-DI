import { Component, OnInit, Inject, Self, Optional } from '@angular/core';
import { CatsImagesService } from '../services/cats-images.service';
import { MY_TOKEN } from '../tokens/myToken';
import { ARE_THERE_CATS } from '../tokens/areThereCats';
import { WITH_TITLE_TOKEN } from '../tokens/withTitle';
import { IWithTitle } from '../interfaces/withTitles';

@Component({
  selector: 'app-cats-cards',
  templateUrl: './cats-cards.component.html',
  styleUrls: ['./cats-cards.component.less'],
  providers: [
    {
      provide: ARE_THERE_CATS,
      deps: [MY_TOKEN], // найдем MY_TOKEN выше и передадим в функцию
      useFactory: function(myToken: string) {
        return myToken.includes('коты');
      }
    }
  ]
})
export class CatsCardsComponent {
  constructor(
    // не пишем здесь Inject(), так как класс — самая популярная форма записи, ангуляр её понимает самостоятельно
    private readonly catsImagesService: CatsImagesService, // private добавляет сервис как поле класса
    @Optional() @Inject(MY_TOKEN) myToken: string | null, // добавили к типу null, так как используем Optional()
    @Inject(ARE_THERE_CATS) areThereCats: boolean
  ) {
    console.log('Коты то здесь? —', areThereCats);

    if (myToken === null) {
      console.error('Никто и не передовал!');

      return;
    }

    console.log(myToken);
  }

  get title(): string {
    return 'название';
  }

  get cats(): ReadonlyArray<string> {
    return this.catsImagesService.catsImages; // обращаемся к сервису
  }
}
