import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BrewActions from '../actions';
import { PunkApiService } from '../services';

@Injectable()
export class BrewEffects {
  public loadBrews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrewActions.loadBrews),
      switchMap((action) =>
        this.punkApiService.getBeers(action.page, action.brewsFilter).pipe(
          map((brews) => BrewActions.loadBrewsSuccess({ brews })),
          catchError((error) => of(BrewActions.loadBrewsFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private punkApiService: PunkApiService,
  ) {}
}
