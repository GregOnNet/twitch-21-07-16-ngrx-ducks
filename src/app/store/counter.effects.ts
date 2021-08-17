import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, tap, withLatestFrom } from 'rxjs/operators';
import { CounterFacade } from './counter.facade';

@Injectable()
export class CounterEffects {
  logCount = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterFacade.actions.add),
      withLatestFrom(this.counter.select.count),
      tap(([action, count]) => localStorage.setItem('Count', `${count}`)),
      map(() => this.counter.logCountSuccess()),
      catchError(() => of(this.counter.logCountError()))
    )
  );

  constructor(private actions$: Actions, private counter: CounterFacade) {}
}
