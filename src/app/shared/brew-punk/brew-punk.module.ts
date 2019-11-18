import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BrewPunkListComponent,
  BrewPunkListFilterComponent,
  BrewPunkListItemComponent,
} from './components';

const COMPONENTS = [
  BrewPunkListComponent,
  BrewPunkListFilterComponent,
  BrewPunkListItemComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule],
})
export class BrewPunkModule {}
