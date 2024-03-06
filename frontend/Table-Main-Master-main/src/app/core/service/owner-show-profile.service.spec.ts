import { TestBed } from '@angular/core/testing';

import { OwnerShowProfileService } from './owner-show-profile.service';

describe('OwnerShowProfileService', () => {
  let service: OwnerShowProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerShowProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
