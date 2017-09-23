import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinComponent } from './news-bulletin.component';

describe('NewsBulletinComponent', () => {
  let component: NewsBulletinComponent;
  let fixture: ComponentFixture<NewsBulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
