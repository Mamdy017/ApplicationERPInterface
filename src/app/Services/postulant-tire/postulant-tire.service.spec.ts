import { TestBed } from '@angular/core/testing';

import { PostulantTireService } from './postulant-tire.service';

describe('PostulantTireService', () => {
  let service: PostulantTireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulantTireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
