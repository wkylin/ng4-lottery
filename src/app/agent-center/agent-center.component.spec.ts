import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCenterComponent } from './agent-center.component';

describe('AgentCenterComponent', () => {
  let component: AgentCenterComponent;
  let fixture: ComponentFixture<AgentCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
