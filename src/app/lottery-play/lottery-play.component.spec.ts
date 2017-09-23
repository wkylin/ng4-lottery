import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryPlayComponent } from './lottery-play.component';

describe('LotteryPlayComponent', () => {
  let component: LotteryPlayComponent;
  let fixture: ComponentFixture<LotteryPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
