import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrewPunkModule } from '@shared/brew-punk';
import { NgrxBrewListContainer } from './containers';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';

const CONTAINERS = [NgrxBrewListContainer];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
  imports: [
    CommonModule,
    StoreModule.forFeature(brewsFeatureKey, reducer),
    EffectsModule.forFeature([BrewEffects]),
    RouterModule,
    BrewPunkModule,
  ],
})
export class NgrxBrewModule {}
