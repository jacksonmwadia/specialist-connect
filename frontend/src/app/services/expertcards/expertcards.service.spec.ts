import { TestBed } from '@angular/core/testing';

import { ExpertcardsService } from './expertcards.service';

describe('ExpertcardsService', () => {
  let service: ExpertcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
