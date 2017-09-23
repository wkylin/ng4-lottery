import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCenterComponent } from './financial-center.component';

describe('FinancialCenterComponent', () => {
  let component: FinancialCenterComponent;
  let fixture: ComponentFixture<FinancialCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
