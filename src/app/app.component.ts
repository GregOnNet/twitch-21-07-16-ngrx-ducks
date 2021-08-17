import { Component } from '@angular/core';
import { CounterFacade } from './store/counter.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$ = this.counter.select.count;

  constructor(private counter: CounterFacade) {}

  incrementCount() {
    //counter.actions.ts - incrementAction = createAction('[Counter] Increment count');
    // this.store.dispatch(incrementAction())
    this.counter.increment.dispatch();
  }

  add5() {
    this.counter.add.dispatch(5);
  }
}
