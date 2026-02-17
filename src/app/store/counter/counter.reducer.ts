import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, initCounter } from './counter.actions';

// Interfejs opisujący strukturę stanu licznika
export interface CounterState {
  count: number;
  lastModified: string | null;
}

// Wartość początkowa
export const initialState: CounterState = { 
  count: 0, 
  lastModified: null
};

function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

export const counterReducer = createReducer(
  initialState,
  on(initCounter, (_, { state }) => ({
    ...state
  })),
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    lastModified: getCurrentTimestamp(),
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count - 1,
    lastModified: getCurrentTimestamp(),
  })),
  on(reset, () => ({
    count: 0,
    lastModified: getCurrentTimestamp(),
  }))
);
