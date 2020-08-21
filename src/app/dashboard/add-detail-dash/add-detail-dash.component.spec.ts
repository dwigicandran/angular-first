import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailDashComponent } from './add-detail-dash.component';

describe('AddDetailDashComponent', () => {
  let component: AddDetailDashComponent;
  let fixture: ComponentFixture<AddDetailDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
