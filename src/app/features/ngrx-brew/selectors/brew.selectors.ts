import { createFeatureSelector, createSelector } from '@ngrx/store';
import { brewsFeatureKey, selectAll, State } from '../reducers';

export const selectBrewState = createFeatureSelector<State>(brewsFeatureKey);

export const selectAllBrews = createSelector(selectBrewState, selectAll);

export const selectBrewLoadingState = createSelector(
  selectBrewState,
  (state) => state.loadingState,
);
