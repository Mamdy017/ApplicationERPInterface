import { TestBed } from '@angular/core/testing';

import { ListeActeurService } from './liste-acteur.service';

describe('ListeActeurService', () => {
  let service: ListeActeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeActeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
