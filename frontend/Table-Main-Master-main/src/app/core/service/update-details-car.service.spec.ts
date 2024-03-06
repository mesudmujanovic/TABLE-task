import { TestBed } from '@angular/core/testing';

import { UpdateDetailsCarService } from './update-details-car.service';

describe('UpdateDetailsCarService', () => {
  let service: UpdateDetailsCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDetailsCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
