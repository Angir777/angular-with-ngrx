import { inject } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { increment, decrement, reset } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectCounterState } from './counter.selectors';

// Efekt zapisujący stan licznika i czas do localStorage przy każdej zmianie
const saveCounterEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const store = inject(Store);
    return actions$.pipe(
      ofType(increment, decrement, reset), // Reaguje tylko na podane akcje
      withLatestFrom(store.select(selectCounterState)), // Dołączamy aktualny stan licznika ze store bo nie mamy props
      tap(([_, counterState]) => {
        localStorage.setItem('counter', JSON.stringify(counterState)); // Zapisuje licznik
      })
    );
  },
  { functional: true, dispatch: false }
);

export const provideCounterEffects = provideEffects({
  saveCounterEffect
});
