import { provideState } from '@ngrx/store';
import { themeReducer } from './theme.reducer';
import { provideThemeEffects } from './theme.effects';

// Dostarczenie stanu i efektów dla funkcji bootstrap
export const provideThemeStore = [
  provideState({ name: 'theme', reducer: themeReducer }), // Rejestracja stanu 'theme'
  provideThemeEffects // Rejestracja efektów
];
