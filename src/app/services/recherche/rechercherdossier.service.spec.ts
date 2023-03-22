import { TestBed } from '@angular/core/testing';

import { RechercherdossierService } from './rechercherdossier.service';

describe('RechercherdossierService', () => {
  let service: RechercherdossierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechercherdossierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
