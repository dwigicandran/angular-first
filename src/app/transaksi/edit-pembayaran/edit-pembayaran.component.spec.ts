import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPembayaranComponent } from './edit-pembayaran.component';

describe('EditPembayaranComponent', () => {
  let component: EditPembayaranComponent;
  let fixture: ComponentFixture<EditPembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
