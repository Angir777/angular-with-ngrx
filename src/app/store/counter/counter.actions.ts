import { createAction } from '@ngrx/store';

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
