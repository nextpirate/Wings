import { CanDeactivateFn } from '@angular/router';

export const gard33Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
