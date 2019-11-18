import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ngrx-brew',
    pathMatch: 'full',
  },
  {
    path: 'ngrx-brew',
    loadChildren: () =>
      import('./features/ngrx-brew').then((m) => m.NgrxBrewRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
