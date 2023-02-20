import { TestBed } from '@angular/core/testing';

import { NewsOperationsServiceService } from './news-operations-service.service';

describe('NewsOperationsServiceService', () => {
  let service: NewsOperationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsOperationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
