import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as BrewActions from '../actions';

@Injectable()
export class BrewEffects {
  public loadBrews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrewActions.loadBrews),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((brews) => BrewActions.loadBrewsSuccess({ brews })),
          catchError((error) => of(BrewActions.loadBrewsFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions) {}
}
