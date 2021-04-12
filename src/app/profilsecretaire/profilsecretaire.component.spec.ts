import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsecretaireComponent } from './profilsecretaire.component';

describe('ProfilsecretaireComponent', () => {
  let component: ProfilsecretaireComponent;
  let fixture: ComponentFixture<ProfilsecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
