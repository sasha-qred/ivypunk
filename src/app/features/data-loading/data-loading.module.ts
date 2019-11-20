import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrewPunkModule } from '@shared/brew-punk';
import {
  RequestInComponentContainer,
  RequestInComponentWithPathParamsSnapshotContainer,
  RequestInComponentWithQueryContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
} from './containers';

const CONTAINERS = [
  RequestInComponentContainer,
  RequestInComponentWithPathParamsSnapshotContainer,
  RequestInComponentWithQueryContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
  imports: [CommonModule, RouterModule, BrewPunkModule],
})
export class DataLoadingModule {}