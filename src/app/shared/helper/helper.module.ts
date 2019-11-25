import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent, RouterEventsComponent } from './components';

const COMPONENTS = [NavigationComponent, RouterEventsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class HelperModule {}
