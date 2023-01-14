import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowLinksComponent } from './modal-window-links.component';

describe('ModalWindowLinksComponent', () => {
  let component: ModalWindowLinksComponent;
  let fixture: ComponentFixture<ModalWindowLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWindowLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWindowLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
