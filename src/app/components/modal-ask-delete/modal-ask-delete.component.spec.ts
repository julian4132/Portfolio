import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAskDeleteComponent } from './modal-ask-delete.component';

describe('ModalAskDeleteComponent', () => {
  let component: ModalAskDeleteComponent;
  let fixture: ComponentFixture<ModalAskDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAskDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
