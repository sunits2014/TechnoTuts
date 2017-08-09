import { TestBed, inject } from '@angular/core/testing';

import { CustomDivService } from './custom-div.service';

describe('CustomDivService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomDivService]
    });
  });

  it('should be created', inject([CustomDivService], (service: CustomDivService) => {
    expect(service).toBeTruthy();
  }));
});
