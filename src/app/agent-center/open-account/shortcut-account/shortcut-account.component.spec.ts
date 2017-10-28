import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutAccountComponent } from './shortcut-account.component';

describe('ShortcutAccountComponent', () => {
  let component: ShortcutAccountComponent;
  let fixture: ComponentFixture<ShortcutAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
