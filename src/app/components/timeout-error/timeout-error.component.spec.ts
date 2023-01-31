import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutErrorComponent } from './timeout-error.component';

describe('TimeoutErrorComponent', () => {
  let component: TimeoutErrorComponent;
  let fixture: ComponentFixture<TimeoutErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoutErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoutErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
