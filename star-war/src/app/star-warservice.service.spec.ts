import { TestBed } from '@angular/core/testing';

import { StarWarserviceService } from './star-warservice.service';

describe('StarWarserviceService', () => {
  let service: StarWarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
