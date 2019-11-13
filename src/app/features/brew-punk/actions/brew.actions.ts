import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Brew, BrewListFilter } from '../models';

export const loadBrews = createAction(
  '[Brew] Load Brews',
  props<{ brewsFilter?: Partial<BrewListFilter>; page?: number }>(),
);

export const loadBrewsSuccess = createAction(
  '[Brew] Load Brews Success',
  props<{ brews: Brew[] }>(),
);

export const loadBrewsFailure = createAction(
  '[Brew] Load Brews Failure',
  props<{ error: any }>(),
);

export const addBrew = createAction('[Brew] Add Brew', props<{ brew: Brew }>());

export const upsertBrew = createAction(
  '[Brew] Upsert Brew',
  props<{ brew: Brew }>(),
);

export const addBrews = createAction(
  '[Brew] Add Brews',
  props<{ brews: Brew[] }>(),
);

export const upsertBrews = createAction(
  '[Brew] Upsert Brews',
  props<{ brews: Brew[] }>(),
);

export const updateBrew = createAction(
  '[Brew] Update Brew',
  props<{ brew: Update<Brew> }>(),
);

export const updateBrews = createAction(
  '[Brew] Update Brews',
  props<{ brews: Array<Update<Brew>> }>(),
);

export const deleteBrew = createAction(
  '[Brew] Delete Brew',
  props<{ id: string }>(),
);

export const deleteBrews = createAction(
  '[Brew] Delete Brews',
  props<{ ids: string[] }>(),
);

export const clearBrews = createAction('[Brew] Clear Brews');
