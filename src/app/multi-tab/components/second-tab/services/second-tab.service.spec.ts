import { TestBed } from '@angular/core/testing';

import { SecondTabService } from './second-tab.service';

describe('SecondTabService', () => {
  let service: SecondTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
