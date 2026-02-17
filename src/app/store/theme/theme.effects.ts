import { inject } from '@angular/core';
import { Actions, createEffect, ofType, provideEffects } from '@ngrx/effects';
import { initTheme, setTheme } from './theme.actions';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Hydratacja przy starcie aplikacji
const initThemeEffect = createEffect(
  () => {
    const saved = localStorage.getItem('theme');

    if (!saved) {
      return of(); // pusty observable
    }

    if (saved === 'light' || saved === 'dark') {
      return of(initTheme({ theme: saved }));
    }

    return of();
  },
  { functional: true }
);

// Efekt zapisujący motyw do localStorage przy każdej zmianie
const saveThemeEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    
    return actions$.pipe(
      ofType(setTheme), // Reaguje tylko na akcję setTheme
      // Tutaj juz mamy potrzebne dane z props
      tap(({ theme }) => {
        localStorage.setItem('theme', theme); // Zapisuje motyw
      })
    );
  },
  { functional: true, dispatch: false } // Efekt nie wysyła nowej akcji
);

// Eksport efektów do użycia w provideThemeStore
export const provideThemeEffects = provideEffects({
  initThemeEffect,
  saveThemeEffect
});
