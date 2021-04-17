import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmedComponent } from './ajoutmed.component';

describe('AjoutmedComponent', () => {
  let component: AjoutmedComponent;
  let fixture: ComponentFixture<AjoutmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
