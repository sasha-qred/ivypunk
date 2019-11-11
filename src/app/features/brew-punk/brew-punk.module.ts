import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(brewsFeatureKey, [reducer]),
    EffectsModule.forFeature([BrewEffects]),
  ],
})
export class BrewPunkModule {}
