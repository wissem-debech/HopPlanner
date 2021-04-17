import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SympthomeventreComponent } from './sympthomeventre.component';

describe('SympthomeventreComponent', () => {
  let component: SympthomeventreComponent;
  let fixture: ComponentFixture<SympthomeventreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SympthomeventreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SympthomeventreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
