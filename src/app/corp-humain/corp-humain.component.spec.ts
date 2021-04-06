import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpHumainComponent } from './corp-humain.component';

describe('CorpHumainComponent', () => {
  let component: CorpHumainComponent;
  let fixture: ComponentFixture<CorpHumainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpHumainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpHumainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
