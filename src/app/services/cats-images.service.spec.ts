import { TestBed } from '@angular/core/testing';

import { CatsImagesService } from './cats-images.service';

describe('CatsImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatsImagesService = TestBed.get(CatsImagesService);
    expect(service).toBeTruthy();
  });
});
