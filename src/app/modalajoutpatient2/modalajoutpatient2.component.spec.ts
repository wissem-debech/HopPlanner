import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modalajoutpatient2Component } from './modalajoutpatient2.component';

describe('Modalajoutpatient2Component', () => {
  let component: Modalajoutpatient2Component;
  let fixture: ComponentFixture<Modalajoutpatient2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modalajoutpatient2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Modalajoutpatient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
