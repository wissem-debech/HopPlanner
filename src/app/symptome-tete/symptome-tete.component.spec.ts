import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomeTeteComponent } from './symptome-tete.component';

describe('SymptomeTeteComponent', () => {
  let component: SymptomeTeteComponent;
  let fixture: ComponentFixture<SymptomeTeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomeTeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomeTeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
