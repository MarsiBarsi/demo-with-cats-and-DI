import { Injectable } from '@angular/core';

@Injectable()
export class CatsImagesService {
  private cats = [
    'http://shing.mobile9.com/download/media/616/cat_DQhCmyXq.jpg',
    'https://avatars2.githubusercontent.com/u/2476143?s=400&v=4',
    'https://s.tcdn.co/a5a/fe4/a5afe471-fd42-39af-9412-f4a690f0179c/17.png',
    'https://pp.userapi.com/c846521/v846521335/4946e/JxF87yKA6h4.jpg?ava=1'
  ];

  constructor() {}

  get catsImages(): ReadonlyArray<string> {
    return this.cats;
  }
}
