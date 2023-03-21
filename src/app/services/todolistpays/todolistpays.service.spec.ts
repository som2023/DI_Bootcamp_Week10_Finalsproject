import { TestBed } from '@angular/core/testing';

import { TodolistpaysService } from './todolistpays.service';

describe('TodolistpaysService', () => {
  let service: TodolistpaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistpaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
