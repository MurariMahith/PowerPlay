import { TestBed, inject } from '@angular/core/testing';

import { ClubServiceService } from './club-service.service';

describe('ClubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubServiceService]
    });
  });

  it('should be created', inject([ClubServiceService], (service: ClubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
