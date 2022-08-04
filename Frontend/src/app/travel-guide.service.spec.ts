import { TestBed } from '@angular/core/testing';

import { TravelGuideService } from './travel-guide.service';

describe('TravelGuideService', () => {
  let service: TravelGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
