import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
import { selectCount, selectCounterState, selectLastModified } from '../../store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  private store = inject(Store); // Wstrzyknięcie Store NgRx

  // Pobranie informacji na temat licznika
  count = toSignal(this.store.select(selectCount));
  lastModified = toSignal(this.store.select(selectLastModified));
  obj = toSignal(this.store.select(selectCounterState));

  constructor() {
    console.log(this.obj());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
