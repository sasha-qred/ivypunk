import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BrewAbstractSourceService, BrewListFilter } from '@shared/brew-punk';
import * as BrewActions from '../actions';
import { FeatureState } from '../reducers';
import { selectAllBrews, selectBrewLoadingState } from '../selectors';

@Injectable()
export class BrewNgrxSourceService extends BrewAbstractSourceService {
  public brews$ = this.store$.select(selectAllBrews);
  public brewsState$ = this.store$.select(selectBrewLoadingState);

  constructor(private store$: Store<FeatureState>) {
    super();
  }

  public loadBrews(page: number, brewsFilter: Partial<BrewListFilter>) {
    this.store$.dispatch(BrewActions.loadBrews({ page, brewsFilter }));
  }
}
