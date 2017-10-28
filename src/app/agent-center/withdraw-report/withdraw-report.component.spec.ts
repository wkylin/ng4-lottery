import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawReportComponent } from './withdraw-report.component';

describe('WithdrawReportComponent', () => {
  let component: WithdrawReportComponent;
  let fixture: ComponentFixture<WithdrawReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
