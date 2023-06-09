import { TestBed } from '@angular/core/testing';

import { ChequeosService } from './chequeos.service';

describe('ChequeosService', () => {
  let service: ChequeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
