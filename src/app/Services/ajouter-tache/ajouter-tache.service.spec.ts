import { TestBed } from '@angular/core/testing';

import { AjouterTacheService } from './ajouter-tache.service';

describe('AjouterTacheService', () => {
  let service: AjouterTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
