import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayLogsComponent } from './pay-logs.component';

describe('PayLogsComponent', () => {
  let component: PayLogsComponent;
  let fixture: ComponentFixture<PayLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
