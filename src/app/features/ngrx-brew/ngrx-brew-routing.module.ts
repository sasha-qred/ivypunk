import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewPunkListContainer, LoadBrewsGuard } from '@shared/brew-punk';
import { NgrxBrewModule } from './ngrx-brew.module';

const routes: Routes = [
  { path: '', component: BrewPunkListContainer, canActivate: [LoadBrewsGuard] },
];

@NgModule({
  imports: [NgrxBrewModule, RouterModule.forChild(routes)],
  providers: [LoadBrewsGuard],
})
export class NgrxBrewRoutingModule {}
