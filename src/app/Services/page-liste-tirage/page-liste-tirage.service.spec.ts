import { TestBed } from '@angular/core/testing';

import { PageListeTirageService } from './page-liste-tirage.service';

describe('PageListeTirageService', () => {
  let service: PageListeTirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageListeTirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
