import { TestBed } from '@angular/core/testing';

import { AdminActeurUserService } from './admin-acteur-user.service';

describe('AdminActeurUserService', () => {
  let service: AdminActeurUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminActeurUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
