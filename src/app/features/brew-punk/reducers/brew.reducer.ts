import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as BrewActions from '../actions';
import { Brew } from '../models';

export const brewsFeatureKey = 'brews';

export interface State extends EntityState<Brew> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Brew> = createEntityAdapter<Brew>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const brewReducer = createReducer(
  initialState,
  on(BrewActions.addBrew, (state, action) =>
    adapter.addOne(action.brew, state),
  ),
  on(BrewActions.upsertBrew, (state, action) =>
    adapter.upsertOne(action.brew, state),
  ),
  on(BrewActions.addBrews, (state, action) =>
    adapter.addMany(action.brews, state),
  ),
  on(BrewActions.upsertBrews, (state, action) =>
    adapter.upsertMany(action.brews, state),
  ),
  on(BrewActions.updateBrew, (state, action) =>
    adapter.updateOne(action.brew, state),
  ),
  on(BrewActions.updateBrews, (state, action) =>
    adapter.updateMany(action.brews, state),
  ),
  on(BrewActions.deleteBrew, (state, action) =>
    adapter.removeOne(action.id, state),
  ),
  on(BrewActions.deleteBrews, (state, action) =>
    adapter.removeMany(action.ids, state),
  ),
  on(BrewActions.loadBrewsSuccess, (state, action) =>
    adapter.addAll(action.brews, state),
  ),
  on(BrewActions.loadBrewsFailure, (state, action) =>
    adapter.addAll([], state),
  ),
  on(BrewActions.clearBrews, (state) => adapter.removeAll(state)),
);

export function reducer(state: State | undefined, action: Action) {
  return brewReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();