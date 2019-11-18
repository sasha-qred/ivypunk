import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxBrewListContainer } from './containers';
import { LoadBrewsGuard } from './guards';
import { NgrxBrewModule } from './ngrx-brew.module';

const routes: Routes = [
  { path: '', component: NgrxBrewListContainer, canActivate: [LoadBrewsGuard] },
];

@NgModule({
  imports: [NgrxBrewModule, RouterModule.forChild(routes)],
  providers: [LoadBrewsGuard],
})
export class NgrxBrewRoutingModule {}
