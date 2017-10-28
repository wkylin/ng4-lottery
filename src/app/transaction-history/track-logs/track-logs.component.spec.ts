import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLogsComponent } from './track-logs.component';

describe('TrackLogsComponent', () => {
  let component: TrackLogsComponent;
  let fixture: ComponentFixture<TrackLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
