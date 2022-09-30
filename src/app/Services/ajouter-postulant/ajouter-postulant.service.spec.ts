import { TestBed } from '@angular/core/testing';

import { AjouterPostulantService } from './ajouter-postulant.service';

describe('AjouterPostulantService', () => {
  let service: AjouterPostulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterPostulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
