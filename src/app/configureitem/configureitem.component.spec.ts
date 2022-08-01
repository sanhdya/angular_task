import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureitemComponent } from './configureitem.component';

describe('ConfigureitemComponent', () => {
  let component: ConfigureitemComponent;
  let fixture: ComponentFixture<ConfigureitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
