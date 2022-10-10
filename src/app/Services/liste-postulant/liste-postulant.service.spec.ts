import { TestBed } from '@angular/core/testing';

import { ListePostulantService } from './liste-postulant.service';

describe('ListePostulantService', () => {
  let service: ListePostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
