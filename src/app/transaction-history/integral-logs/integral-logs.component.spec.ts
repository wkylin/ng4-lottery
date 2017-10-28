import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralLogsComponent } from './integral-logs.component';

describe('IntegralLogsComponent', () => {
  let component: IntegralLogsComponent;
  let fixture: ComponentFixture<IntegralLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
