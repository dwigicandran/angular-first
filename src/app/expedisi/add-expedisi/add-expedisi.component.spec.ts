import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpedisiComponent } from './add-expedisi.component';

describe('AddExpedisiComponent', () => {
  let component: AddExpedisiComponent;
  let fixture: ComponentFixture<AddExpedisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpedisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpedisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
