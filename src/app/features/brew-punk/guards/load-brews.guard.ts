import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { merge, Observable, of } from 'rxjs';
import { delay, filter, first, map } from 'rxjs/operators';
import * as BrewActions from '../actions';
import { LoadingState } from '../enums';
import { pickBrewFilter } from '../helpers';
import { FeatureState } from '../reducers';
import { selectBrewLoadingState } from '../selectors';

@Injectable()
export class LoadBrewsGuard implements CanActivate {
  constructor(private store$: Store<FeatureState>) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const page = route.queryParams.page;
    const brewsFilter = pickBrewFilter(route.queryParams);
    this.store$.dispatch(BrewActions.loadBrews({ page, brewsFilter }));
    return merge(
      of(true).pipe(delay(500)),
      this.store$.pipe(
        select(selectBrewLoadingState),
        filter(
          (status) =>
            status === LoadingState.LOADED || status === LoadingState.ERROR,
        ),
        map((status) => LoadingState.LOADED === status),
      ),
    ).pipe(first());
  }
}
