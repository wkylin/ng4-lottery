import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcCodeComponent } from './qc-code.component';

describe('QcCodeComponent', () => {
  let component: QcCodeComponent;
  let fixture: ComponentFixture<QcCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
