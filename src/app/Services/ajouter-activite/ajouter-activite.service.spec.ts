import { TestBed } from '@angular/core/testing';

import { AjouterActiviteService } from './ajouter-activite.service';

describe('AjouterActiviteService', () => {
  let service: AjouterActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
