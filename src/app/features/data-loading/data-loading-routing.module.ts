import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLoadingModule } from './data-loading.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), DataLoadingModule],
  exports: [RouterModule],
})
export class DataLoadingRoutingModule {}
