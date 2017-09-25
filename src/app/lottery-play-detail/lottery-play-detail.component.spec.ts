import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryPlayDetailComponent } from './lottery-play-detail.component';

describe('LotteryPlayDetailComponent', () => {
  let component: LotteryPlayDetailComponent;
  let fixture: ComponentFixture<LotteryPlayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryPlayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryPlayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
