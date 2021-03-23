import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosultationComponent } from './cosultation.component';

describe('CosultationComponent', () => {
  let component: CosultationComponent;
  let fixture: ComponentFixture<CosultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
