import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMedecinComponent } from './tab-medecin.component';

describe('TabMedecinComponent', () => {
  let component: TabMedecinComponent;
  let fixture: ComponentFixture<TabMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
