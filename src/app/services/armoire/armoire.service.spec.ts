import { TestBed } from '@angular/core/testing';

import { ArmoireService } from './armoire.service';

describe('ArmoireService', () => {
  let service: ArmoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
