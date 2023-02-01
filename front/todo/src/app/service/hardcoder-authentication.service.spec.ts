import { TestBed } from '@angular/core/testing';

import { HardcoderAuthenticationService } from './hardcoder-authentication.service';

describe('HardcoderAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcoderAuthenticationService = TestBed.get(HardcoderAuthenticationService);
    expect(service).toBeTruthy();
  });
});
