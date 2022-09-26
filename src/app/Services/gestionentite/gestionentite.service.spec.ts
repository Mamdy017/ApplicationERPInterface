import { TestBed } from '@angular/core/testing';

import { GestionentiteService } from './gestionentite.service';

describe('GestionentiteService', () => {
  let service: GestionentiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionentiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
