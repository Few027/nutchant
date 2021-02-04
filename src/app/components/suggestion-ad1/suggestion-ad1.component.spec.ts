import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionAd1Component } from './suggestion-ad1.component';

describe('SuggestionAd1Component', () => {
  let component: SuggestionAd1Component;
  let fixture: ComponentFixture<SuggestionAd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionAd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionAd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
