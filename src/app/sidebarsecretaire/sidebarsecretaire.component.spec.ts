import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsecretaireComponent } from './sidebarsecretaire.component';

describe('SidebarsecretaireComponent', () => {
  let component: SidebarsecretaireComponent;
  let fixture: ComponentFixture<SidebarsecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarsecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
