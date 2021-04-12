import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonajoutmedecinComponent } from './buttonajoutmedecin.component';

describe('ButtonajoutmedecinComponent', () => {
  let component: ButtonajoutmedecinComponent;
  let fixture: ComponentFixture<ButtonajoutmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonajoutmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonajoutmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
