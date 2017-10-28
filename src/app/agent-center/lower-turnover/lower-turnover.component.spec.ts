import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerTurnoverComponent } from './lower-turnover.component';

describe('LowerTurnoverComponent', () => {
  let component: LowerTurnoverComponent;
  let fixture: ComponentFixture<LowerTurnoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerTurnoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
