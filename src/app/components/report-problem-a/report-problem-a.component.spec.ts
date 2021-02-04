import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemAComponent } from './report-problem-a.component';

describe('ReportProblemAComponent', () => {
  let component: ReportProblemAComponent;
  let fixture: ComponentFixture<ReportProblemAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProblemAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
