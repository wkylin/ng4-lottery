import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsLogsComponent } from './refunds-logs.component';

describe('RefundsLogsComponent', () => {
  let component: RefundsLogsComponent;
  let fixture: ComponentFixture<RefundsLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
