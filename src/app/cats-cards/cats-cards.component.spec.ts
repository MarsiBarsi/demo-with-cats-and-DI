import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsCardsComponent } from './cats-cards.component';

describe('CatsCardsComponent', () => {
  let component: CatsCardsComponent;
  let fixture: ComponentFixture<CatsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
