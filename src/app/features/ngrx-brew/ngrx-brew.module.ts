import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrewAbstractSourceService, BrewPunkModule } from '@shared/brew-punk';
import { NgrxBrewListContainer } from './containers';
import { BrewEffects } from './effects';
import { brewsFeatureKey, reducer } from './reducers';
import { BrewNgrxSourceService } from './services';

const CONTAINERS = [NgrxBrewListContainer];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
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
    RouterModule,
    BrewPunkModule,
  ],
})
export class NgrxBrewModule {}
