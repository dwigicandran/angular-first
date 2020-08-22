import { TestBed } from '@angular/core/testing';

import { ExpedisiService } from './expedisi.service';

describe('ExpedisiService', () => {
  let service: ExpedisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpedisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
