import { TestBed } from '@angular/core/testing';

import { ListeGlobaleService } from './liste-globale.service';

describe('ListeGlobaleService', () => {
  let service: ListeGlobaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeGlobaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
