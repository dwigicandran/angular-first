import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDashComponent } from './edit-user-dash.component';

describe('EditUserDashComponent', () => {
  let component: EditUserDashComponent;
  let fixture: ComponentFixture<EditUserDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
