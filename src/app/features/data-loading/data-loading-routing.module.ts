import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestInComponentContainer } from './containers';
import { DataLoadingModule } from './data-loading.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'request-in-component',
  },
  {
    path: 'request-in-component',
    component: RequestInComponentContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DataLoadingModule],
  exports: [RouterModule],
})
export class DataLoadingRoutingModule {}
