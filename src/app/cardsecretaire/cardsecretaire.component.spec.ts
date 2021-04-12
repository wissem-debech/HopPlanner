import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsecretaireComponent } from './cardsecretaire.component';

describe('CardsecretaireComponent', () => {
  let component: CardsecretaireComponent;
  let fixture: ComponentFixture<CardsecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
