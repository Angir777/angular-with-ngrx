import { Component, effect, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { initTheme } from './store/theme/theme.actions';
import { selectTheme } from './store/theme/theme.selectors';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-with-ngrx';

  private store = inject(Store); // Iniekcja Store'a NgRx
  private renderer = inject(Renderer2); // Renderer do manipulowania DOMem (dodawanie klas do body)
  theme = toSignal(this.store.select(selectTheme)); // Użycie `toSignal`, aby używać selectorów jako reactive signals

  constructor() {
    // 1. Wczytanie motywu z localStorage przy uruchomieniu
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
    this.store.dispatch(initTheme({ theme: savedTheme })); // Wywołanie akcji initTheme, aby ustawić motyw w Store

    // 2. Obserwowanie zmiany motywu i aktualizacja klasy na <body>
    effect(() => {
      const currentTheme = this.theme();
      if (!currentTheme) return;
    
      const body = document.body;
      this.renderer.removeClass(body, 'light');
      this.renderer.removeClass(body, 'dark');
      this.renderer.addClass(body, currentTheme);
    });
  }
}
