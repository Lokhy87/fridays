import { TestBed } from '@angular/core/testing';

import { WordFinderServiceApi } from './word-finder-service-api';

describe('WordFinderServiceApi', () => {
  let service: WordFinderServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordFinderServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
