import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutoIdComponent } from './ngx-auto-id.component';

describe('NgxAutoIdComponent', () => {
  let component: NgxAutoIdComponent;
  let fixture: ComponentFixture<NgxAutoIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAutoIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
