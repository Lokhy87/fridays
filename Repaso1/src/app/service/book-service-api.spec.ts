import { TestBed } from '@angular/core/testing';

import { BookServiceApi } from './book-service-api';

describe('BookServiceApi', () => {
  let service: BookServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
