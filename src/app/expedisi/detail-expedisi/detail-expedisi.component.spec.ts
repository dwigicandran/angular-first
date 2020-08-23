import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpedisiComponent } from './detail-expedisi.component';

describe('DetailExpedisiComponent', () => {
  let component: DetailExpedisiComponent;
  let fixture: ComponentFixture<DetailExpedisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExpedisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExpedisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
