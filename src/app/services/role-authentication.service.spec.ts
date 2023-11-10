import { TestBed } from '@angular/core/testing';

import { RoleAuthenticationService } from './role-authentication.service';

describe('RoleAuthenticationService', () => {
  let service: RoleAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
