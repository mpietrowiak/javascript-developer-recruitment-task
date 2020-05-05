import { TestBed } from '@angular/core/testing';

import { FavoriteDataAggregatorService } from './favorite-data-aggregator.service';

describe('FavoriteDataAggregatorService', () => {
  let service: FavoriteDataAggregatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteDataAggregatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
