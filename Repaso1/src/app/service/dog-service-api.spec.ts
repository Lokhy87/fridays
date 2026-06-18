import { TestBed } from '@angular/core/testing';

import { DogServiceApi } from './dog-service-api';

describe('DogServiceApi', () => {
  let service: DogServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
