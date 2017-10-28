import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankComponent } from './net-bank.component';

describe('NetBankComponent', () => {
  let component: NetBankComponent;
  let fixture: ComponentFixture<NetBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
