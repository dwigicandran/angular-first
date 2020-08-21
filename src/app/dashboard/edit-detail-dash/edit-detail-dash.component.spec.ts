import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailDashComponent } from './edit-detail-dash.component';

describe('EditDetailDashComponent', () => {
  let component: EditDetailDashComponent;
  let fixture: ComponentFixture<EditDetailDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
