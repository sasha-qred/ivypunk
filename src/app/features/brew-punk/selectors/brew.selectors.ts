import { createFeatureSelector } from '@ngrx/store';
import { brewsFeatureKey, State } from '../reducers';

export const selectBrewState = createFeatureSelector<State>(brewsFeatureKey);
