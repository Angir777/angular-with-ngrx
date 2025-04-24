import { provideState } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { provideCounterEffects } from './counter.effects';

// Dostarczenie stanu i efektów dla funkcji bootstrap
export const provideCounterStore = [
  provideState({ name: 'counter', reducer: counterReducer }), // Rejestracja stanu licznika
  provideCounterEffects // Rejestracja efektów
];
