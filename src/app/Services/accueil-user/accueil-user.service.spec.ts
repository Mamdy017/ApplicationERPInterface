import { TestBed } from '@angular/core/testing';

import { AccueilUserService } from './accueil-user.service';

describe('AccueilUserService', () => {
  let service: AccueilUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
