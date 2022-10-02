import { TestBed } from '@angular/core/testing';

import { AjouterParticipantService } from './ajouter-participant.service';

describe('AjouterParticipantService', () => {
  let service: AjouterParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
