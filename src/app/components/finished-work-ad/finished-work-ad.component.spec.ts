import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedWorkAdComponent } from './finished-work-ad.component';

describe('FinishedWorkAdComponent', () => {
  let component: FinishedWorkAdComponent;
  let fixture: ComponentFixture<FinishedWorkAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedWorkAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedWorkAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
