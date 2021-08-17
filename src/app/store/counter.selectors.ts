import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.facade';

/**
 *
 * {
 *   counter: {  <--- createFeatureSelector
 *     count: 0; <--- createSelector
 *   }
 * }
 *
 */

const counterFeature = createFeatureSelector<CounterState>('counter');

export const count = createSelector(counterFeature, (state) => state.count);
export const count2 = createSelector(counterFeature, (state) => state.count);
