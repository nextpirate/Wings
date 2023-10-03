import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { gardd22Guard } from './gardd22.guard';

describe('gardd22Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardd22Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
