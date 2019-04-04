import { Component, OnInit } from '@angular/core';
import { CatsImagesService } from '../services/cats-images.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.less']
})
export class CatsListComponent {
  constructor(private readonly catsImagesService: CatsImagesService) {}

  get cats(): ReadonlyArray<string> {
    return this.catsImagesService.catsImages;
  }
}
