import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { gardd44Guard } from './gardd44.guard';

describe('gardd44Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardd44Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
