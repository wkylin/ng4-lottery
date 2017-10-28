import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralReportComponent } from './integral-report.component';

describe('IntegralReportComponent', () => {
  let component: IntegralReportComponent;
  let fixture: ComponentFixture<IntegralReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
