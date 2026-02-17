import { CommonModule } from '@angular/common';
import { Component, effect, inject, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { setTheme } from '../../store/theme/theme.actions';
import { selectTheme } from '../../store/theme/theme.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  private renderer = inject(Renderer2);
  private store = inject(Store); // Wstrzyknięcie Store NgRx
  
  readonly theme = toSignal(this.store.select(selectTheme)); // Sygnalizacja aktualnego motywu

  constructor() {
    // Efekt reagujący na zmianę theme i aktualizujący body
    effect(() => {
      const currentTheme = this.theme();
      if (!currentTheme) return;

      const body = document.body;
      this.renderer.removeClass(body, 'light');
      this.renderer.removeClass(body, 'dark');
      this.renderer.addClass(body, currentTheme);
    });
  }

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.store.dispatch(setTheme({ theme: newTheme })); // Wysłanie akcji zmiany motywu
  }
}
