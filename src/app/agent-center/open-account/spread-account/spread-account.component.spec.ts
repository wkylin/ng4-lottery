import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadAccountComponent } from './spread-account.component';

describe('SpreadAccountComponent', () => {
  let component: SpreadAccountComponent;
  let fixture: ComponentFixture<SpreadAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
