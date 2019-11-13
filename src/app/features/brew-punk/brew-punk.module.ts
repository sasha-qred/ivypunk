import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrewPunkListContainer } from './containers';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';
import { PunkApiService } from './services';

@NgModule({
  declarations: [BrewPunkListContainer],
  exports: [BrewPunkListContainer],
  providers: [PunkApiService],
  imports: [
    CommonModule,
    StoreModule.forFeature(brewsFeatureKey, reducer),
    EffectsModule.forFeature([BrewEffects]),
  ],
})
export class BrewPunkModule {}
