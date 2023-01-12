import { TestBed } from '@angular/core/testing';

import { UpdatePortfolioDataService } from './update-portfolio-data.service';

describe('UpdatePortfolioDataService', () => {
  let service: UpdatePortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
