import { Component } from '@angular/core';
import { MY_TOKEN } from './tokens/myToken';
import { IWithTitle } from './interfaces/withTitles';
import { WITH_TITLE_TOKEN } from './tokens/withTitle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [
    {
      provide: WITH_TITLE_TOKEN,
      useExisting: AppComponent
    }
  ]
})
export class AppComponent implements IWithTitle {
  title = 'tfs-di-demo';
}
