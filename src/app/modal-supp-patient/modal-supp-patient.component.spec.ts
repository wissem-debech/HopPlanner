import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuppPatientComponent } from './modal-supp-patient.component';

describe('ModalSuppPatientComponent', () => {
  let component: ModalSuppPatientComponent;
  let fixture: ComponentFixture<ModalSuppPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuppPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuppPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
