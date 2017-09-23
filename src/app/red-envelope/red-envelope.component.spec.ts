import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedEnvelopeComponent } from './red-envelope.component';

describe('RedEnvelopeComponent', () => {
  let component: RedEnvelopeComponent;
  let fixture: ComponentFixture<RedEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
