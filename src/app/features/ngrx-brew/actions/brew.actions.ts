import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Brew, BrewListFilter } from '../models';

export const loadBrews = createAction(
  '[Ngrx/Brew] Load Brews',
  props<{ brewsFilter?: Partial<BrewListFilter>; page?: number }>(),
);

export const loadBrewsSuccess = createAction(
  '[Ngrx/Brew] Load Brews Success',
  props<{ brews: Brew[] }>(),
);

export const loadBrewsFailure = createAction(
  '[Ngrx/Brew] Load Brews Failure',
  props<{ error: any }>(),
);

export const addBrew = createAction(
  '[Ngrx/Brew] Add Brew',
  props<{ brew: Brew }>(),
);

export const upsertBrew = createAction(
  '[Ngrx/Brew] Upsert Brew',
  props<{ brew: Brew }>(),
);

export const addBrews = createAction(
  '[Ngrx/Brew] Add Brews',
  props<{ brews: Brew[] }>(),
);

export const upsertBrews = createAction(
  '[Ngrx/Brew] Upsert Brews',
  props<{ brews: Brew[] }>(),
);

export const updateBrew = createAction(
  '[Ngrx/Brew] Update Brew',
  props<{ brew: Update<Brew> }>(),
);

export const updateBrews = createAction(
  '[Ngrx/Brew] Update Brews',
  props<{ brews: Array<Update<Brew>> }>(),
);

export const deleteBrew = createAction(
  '[Ngrx/Brew] Delete Brew',
  props<{ id: string }>(),
);

export const deleteBrews = createAction(
  '[Ngrx/Brew] Delete Brews',
  props<{ ids: string[] }>(),
);

export const clearBrews = createAction('[Ngrx/Brew] Clear Brews');
