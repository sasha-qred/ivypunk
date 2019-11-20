import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RequestInComponentContainer,
  RequestInComponentWithPathParamsContainer,
  RequestInComponentWithPathParamsSnapshotContainer,
  RequestInComponentWithQueryContainer,
  RequestInComponentWithQuerySnapshotContainer,
  RequestInResolverContainer,
  RequestInResolverSnapshotContainer,
  RequestInResolverWithPathParamsContainer,
  RequestInResolverWithPathParamsSnapshotContainer,
  RequestInResolverWithQueryContainer,
} from './containers';
import { DataLoadingModule } from './data-loading.module';
import {
  LoadBrewsResolver,
  LoadBrewsWithPageResolver,
  LoadBrewsWithQueryResolver,
} from './resolvers';

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
    path: 'request-in-component-with-path-params/:page',
    component: RequestInComponentWithPathParamsContainer,
  },
  {
    path: 'request-in-component-with-path-params-snapshot/:page',
    component: RequestInComponentWithPathParamsSnapshotContainer,
  },
  {
    path: 'request-in-component-with-query',
    component: RequestInComponentWithQueryContainer,
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
  {
    path: 'request-in-resolver-with-params/:page',
    component: RequestInResolverWithPathParamsContainer,
    resolve: {
      brews: LoadBrewsWithPageResolver,
    },
  },
  {
    path: 'request-in-resolver-with-params-snapshot/:page',
    component: RequestInResolverWithPathParamsSnapshotContainer,
    resolve: {
      brews: LoadBrewsWithPageResolver,
    },
  },
  {
    path: 'request-in-resolver-with-query',
    component: RequestInResolverWithQueryContainer,
    resolve: {
      brews: LoadBrewsWithQueryResolver,
    },
  },
  {
    path: 'request-in-resolver-with-query-change',
    component: RequestInResolverWithQueryContainer,
    resolve: {
      brews: LoadBrewsWithQueryResolver,
    },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DataLoadingModule],
  providers: [
    LoadBrewsResolver,
    LoadBrewsWithPageResolver,
    LoadBrewsWithQueryResolver,
  ],
  exports: [RouterModule],
})
export class DataLoadingRoutingModule {}
