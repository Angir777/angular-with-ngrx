import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  private store = inject(Store); // Wstrzyknięcie Store NgRx
  theme = toSignal(this.store.select(selectTheme)); // Sygnalizacja aktualnego motywu

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.store.dispatch(setTheme({ theme: newTheme })); // Wysłanie akcji zmiany motywu
  }
}
