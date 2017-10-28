import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemNoticeComponent } from './system-notice.component';

describe('SystemNoticeComponent', () => {
  let component: SystemNoticeComponent;
  let fixture: ComponentFixture<SystemNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
