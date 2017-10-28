import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawCashComponent } from './withdraw-cash.component';

describe('WithdrawCashComponent', () => {
  let component: WithdrawCashComponent;
  let fixture: ComponentFixture<WithdrawCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
