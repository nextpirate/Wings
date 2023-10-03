import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { gard33Guard } from './gard33.guard';

describe('gard33Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gard33Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
