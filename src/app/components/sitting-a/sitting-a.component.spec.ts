import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingAComponent } from './sitting-a.component';

describe('SittingAComponent', () => {
  let component: SittingAComponent;
  let fixture: ComponentFixture<SittingAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SittingAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
