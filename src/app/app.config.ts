// Konfiguracja główna aplikacji Angular
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Funkcje do integracji z NgRx Store
import { provideStore } from '@ngrx/store';
import { provideThemeStore } from './store/theme/theme.store';
import { provideCounterStore } from './store/counter/counter.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optymalizacja wykrywania zmian
    provideRouter(routes), // Rejestracja tras
    provideStore(), // Inicjalizacja Store NgRx
    provideThemeStore, // Dostarczenie stanu i efektów dla tematu
    provideCounterStore // Dostarczenie stanu i efektów dla licznika
  ]
};
