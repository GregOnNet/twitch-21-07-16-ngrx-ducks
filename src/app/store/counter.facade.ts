import {
  bindSelectors,
  createMutableDuck,
  getActions,
  StoreFacade,
} from '@ngrx-ducks/core';
import * as selectors from './counter.selectors';

export interface CounterState {
  count: number;
}

/**
 *
 * Store Initial State
 * {
 *   counter: {
 *     count: 0
 *   }
 * }
 *
 */

@StoreFacade<CounterState>({
  feature: 'counter',
  defaults: {
    count: 0,
  },
})
export class CounterFacade {
  static actions = getActions(CounterFacade);

  select = bindSelectors(selectors);

  // action         +                   case-reducer-function
  // |                                  |
  // createAction() + createReducer({}, on(increment, (state) => ...)) = Duck

  increment = createMutableDuck(
    '[Counter] Increment count',
    (state: CounterState) => state.count++
  );

  add = createMutableDuck(
    '[Counter] Add number to count',
    (state: CounterState, payload: number) => (state.count += payload)
  );

  logCountSuccess = createMutableDuck('[Counter] Log count successful');
  logCountError = createMutableDuck('[Counter] Log count failed');
}
