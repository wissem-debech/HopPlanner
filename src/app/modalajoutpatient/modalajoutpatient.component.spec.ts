import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalajoutpatientComponent } from './modalajoutpatient.component';

describe('ModalajoutpatientComponent', () => {
  let component: ModalajoutpatientComponent;
  let fixture: ComponentFixture<ModalajoutpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalajoutpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalajoutpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
