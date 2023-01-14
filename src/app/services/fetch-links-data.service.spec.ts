import { TestBed } from '@angular/core/testing';

import { FetchLinksDataService } from './fetch-links-data.service';

describe('FetchLinksDataService', () => {
  let service: FetchLinksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLinksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
