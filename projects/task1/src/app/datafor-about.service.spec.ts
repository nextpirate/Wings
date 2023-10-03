import { TestBed } from '@angular/core/testing';

import { DataforAboutService } from './datafor-about.service';

describe('DataforAboutService', () => {
  let service: DataforAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataforAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
