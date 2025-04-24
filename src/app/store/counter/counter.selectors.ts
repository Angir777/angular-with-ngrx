import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// Wybiera cały obiekt licznika z globalnego store
export const selectCounterState = createFeatureSelector<CounterState>('counter');

// Wybiera sam licznik
export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);

// Wybiera tylko datę
export const selectLastModified = createSelector(
  selectCounterState,
  (state) => state.lastModified
);
