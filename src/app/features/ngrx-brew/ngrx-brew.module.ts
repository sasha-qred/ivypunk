import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrewAbstractSourceService, BrewPunkModule } from '@shared/brew-punk';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';
import { BrewNgrxSourceService } from './services';

@NgModule({
  providers: [
    {
      provide: BrewAbstractSourceService,
      useClass: BrewNgrxSourceService,
    },
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(brewsFeatureKey, reducer),
    EffectsModule.forFeature([BrewEffects]),
    BrewPunkModule,
  ],
})
export class NgrxBrewModule {}
