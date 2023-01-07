import { TestBed } from '@angular/core/testing';

import { FetchPortfolioDataService } from './fetch-portfolio-data.service';

describe('FetchPortfolioDataService', () => {
  let service: FetchPortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
