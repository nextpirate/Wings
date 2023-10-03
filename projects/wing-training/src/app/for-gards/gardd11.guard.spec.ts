import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardd11Guard } from './gardd11.guard';

describe('gardd11Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardd11Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
