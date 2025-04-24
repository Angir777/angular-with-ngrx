import { createReducer, on } from '@ngrx/store';
import { initTheme, setTheme } from './theme.actions';

// Interfejs opisujący strukturę stanu tematu
export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light', // Domyślny motyw
};

// Reducer obsługujący akcje zmiany motywu
export const themeReducer = createReducer(
  initialState,
  on(initTheme, (state, { theme }) => ({ ...state, theme })), // Inicjalizacja tematu
  on(setTheme, (state, { theme }) => ({ ...state, theme })) // Zmiana motywu
);
