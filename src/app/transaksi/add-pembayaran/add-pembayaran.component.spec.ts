import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPembayaranComponent } from './add-pembayaran.component';

describe('AddPembayaranComponent', () => {
  let component: AddPembayaranComponent;
  let fixture: ComponentFixture<AddPembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
