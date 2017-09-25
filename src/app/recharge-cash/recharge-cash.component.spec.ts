import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCashComponent } from './recharge-cash.component';

describe('RechargeCashComponent', () => {
  let component: RechargeCashComponent;
  let fixture: ComponentFixture<RechargeCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
