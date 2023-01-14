import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowHeaderComponent } from './modal-window-header.component';

describe('ModalWindowHeaderComponent', () => {
  let component: ModalWindowHeaderComponent;
  let fixture: ComponentFixture<ModalWindowHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWindowHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWindowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
