import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetLogsComponent } from './bet-logs.component';

describe('BetLogsComponent', () => {
  let component: BetLogsComponent;
  let fixture: ComponentFixture<BetLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
