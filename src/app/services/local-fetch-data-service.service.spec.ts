import { TestBed } from '@angular/core/testing';

import { LocalFetchDataServiceService } from './local-fetch-data-service.service';

describe('LocalFetchDataServiceService', () => {
  let service: LocalFetchDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalFetchDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
