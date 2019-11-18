import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterEventsComponent } from './components';

const COMPONENTS = [RouterEventsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule],
})
export class HelperModule {}
