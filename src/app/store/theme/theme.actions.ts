import { createAction, props } from '@ngrx/store';

// Akcja inicjalizacji tematu (z localStorage)
export const initTheme = createAction(
  '[Theme] Init Theme',
  props<{ theme: 'light' | 'dark' }>()
);

// Akcja ustawienia nowego motywu
export const setTheme = createAction(
  '[Theme] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);
