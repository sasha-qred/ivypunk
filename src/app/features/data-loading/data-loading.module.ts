import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrewPunkModule } from '@shared/brew-punk';
import { RequestInComponentContainer } from './containers';

const CONTAINERS = [RequestInComponentContainer];

@NgModule({
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
  imports: [CommonModule, BrewPunkModule],
})
export class DataLoadingModule {}
