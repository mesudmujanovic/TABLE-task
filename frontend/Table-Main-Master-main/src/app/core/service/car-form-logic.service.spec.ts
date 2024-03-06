import { TestBed } from '@angular/core/testing';

import { CarFormLogicService } from './car-form-logic.service';

describe('CarFormLogicService', () => {
  let service: CarFormLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFormLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
