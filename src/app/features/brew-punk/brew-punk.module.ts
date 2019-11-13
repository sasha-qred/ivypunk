import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  BrewPunkListComponent,
  BrewPunkListFilterComponent,
} from './components';
import { BrewPunkListContainer } from './containers';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';
import { PunkApiService } from './services';

const COMPONENTS = [BrewPunkListComponent, BrewPunkListFilterComponent];
const CONTAINERS = [BrewPunkListContainer];

@NgModule({
  declarations: [...COMPONENTS, ...CONTAINERS],
  exports: [...CONTAINERS],
  providers: [PunkApiService],
  imports: [
    CommonModule,
    StoreModule.forFeature(brewsFeatureKey, reducer),
    EffectsModule.forFeature([BrewEffects]),
    ReactiveFormsModule,
  ],
})
export class BrewPunkModule {}
