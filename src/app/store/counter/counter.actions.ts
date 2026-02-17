import { createAction, props } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// Akcja inicjalizacji licznika (z localStorage)
export const initCounter = createAction(
    '[Counter] Init Counter',
    props<{ state: CounterState }>()
);

// Akcja zwiększenia licznika
export const increment = createAction(
    '[Counter] Increment'
);

// Akcja zmniejszenia licznika
export const decrement = createAction(
    '[Counter] Decrement'
);

// Akcja resetu licznika
export const reset = createAction(
    '[Counter] Reset'
);
