import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desktop01Component } from './desktop01.component';

describe('Desktop01Component', () => {
  let component: Desktop01Component;
  let fixture: ComponentFixture<Desktop01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desktop01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desktop01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
