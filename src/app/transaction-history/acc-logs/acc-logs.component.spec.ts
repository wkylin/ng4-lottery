import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccLogsComponent } from './acc-logs.component';

describe('AccLogsComponent', () => {
  let component: AccLogsComponent;
  let fixture: ComponentFixture<AccLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
