import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from './theme.reducer';

// Wybiera cały stan slice 'theme' z globalnego store
export const selectThemeState = createFeatureSelector<ThemeState>('theme');

// Wybiera tylko właściwość `theme` ze stanu
export const selectTheme = createSelector(
  selectThemeState,
  (state) => state.theme
);
