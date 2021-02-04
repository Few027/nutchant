import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkAdComponent } from './all-work-ad.component';

describe('AllWorkAdComponent', () => {
  let component: AllWorkAdComponent;
  let fixture: ComponentFixture<AllWorkAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorkAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
