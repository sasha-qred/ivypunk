import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrewPunkModule } from '@shared/brew-punk';
import {
  RequestInComponentContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
} from './containers';

const CONTAINERS = [
  RequestInComponentContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
  imports: [CommonModule, BrewPunkModule],
})
export class DataLoadingModule {}
