import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  BrewPunkListComponent,
  BrewPunkListFilterComponent,
  BrewPunkListItemComponent,
} from './components';
import { BrewPunkListContainer } from './containers';

const CONTAINERS = [BrewPunkListContainer];

const COMPONENTS = [
  BrewPunkListComponent,
  BrewPunkListFilterComponent,
  BrewPunkListItemComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...CONTAINERS],
  exports: [...COMPONENTS, ...CONTAINERS],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class BrewPunkModule {}
