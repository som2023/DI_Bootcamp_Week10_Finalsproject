import { TestBed } from '@angular/core/testing';

import { SupprimerService } from './supprimer.service';

describe('SupprimerService', () => {
  let service: SupprimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
