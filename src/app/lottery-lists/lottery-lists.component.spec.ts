import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryListsComponent } from './lottery-lists.component';

describe('LotteryListsComponent', () => {
  let component: LotteryListsComponent;
  let fixture: ComponentFixture<LotteryListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
