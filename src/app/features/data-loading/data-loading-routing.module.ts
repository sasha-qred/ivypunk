import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RequestInComponentContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
} from './containers';
import { DataLoadingModule } from './data-loading.module';
import { LoadBrewsResolver } from './resolvers';

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
  {
    path: 'request-in-component-with-query-snapshot',
    component: RequestInComponentWithQuerySnapshotContainer,
  },
  {
    path: 'request-in-resolver',
    component: RequestInResolverContainer,
    resolve: {
      brews: LoadBrewsResolver,
    },
  },
  {
    path: 'request-in-resolver-snapshot',
    component: RequestInResolverSnapshotContainer,
    resolve: {
      brews: LoadBrewsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DataLoadingModule],
  providers: [LoadBrewsResolver],
  exports: [RouterModule],
})
export class DataLoadingRoutingModule {}
