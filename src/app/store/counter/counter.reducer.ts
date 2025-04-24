import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
  count: number;
  lastModified: string | null;
}

function getInitialState(): CounterState {
  const saved = localStorage.getItem('counter');
  if (saved) {
    try {
      return JSON.parse(saved) as CounterState;
    } catch {
      // fallback jeśli JSON będzie uszkodzony
    }
  }

  return {
    count: 0,
    lastModified: null,
  };
}

function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

export const counterReducer = createReducer(
  getInitialState(),
  on(increment, (state) => ({
    count: state.count + 1,
    lastModified: getCurrentTimestamp(),
  })),
  on(decrement, (state) => ({
    count: state.count - 1,
    lastModified: getCurrentTimestamp(),
  })),
  on(reset, () => ({
    count: 0,
    lastModified: getCurrentTimestamp(),
  }))
);
