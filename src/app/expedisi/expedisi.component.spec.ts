import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedisiComponent } from './expedisi.component';

describe('ExpedisiComponent', () => {
  let component: ExpedisiComponent;
  let fixture: ComponentFixture<ExpedisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
