import { TestBed } from '@angular/core/testing';

import { BookstoreServiceService } from './bookstore-service.service';

describe('BookstoreServiceService', () => {
  let service: BookstoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
