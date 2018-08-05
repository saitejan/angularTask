import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertmanageComponent } from './alertmanage.component';

describe('AlertmanageComponent', () => {
  let component: AlertmanageComponent;
  let fixture: ComponentFixture<AlertmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
