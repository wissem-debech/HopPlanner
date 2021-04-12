import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonajoutpatientComponent } from './buttonajoutpatient.component';

describe('ButtonajoutpatientComponent', () => {
  let component: ButtonajoutpatientComponent;
  let fixture: ComponentFixture<ButtonajoutpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonajoutpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonajoutpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
