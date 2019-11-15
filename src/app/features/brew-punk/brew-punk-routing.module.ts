import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewPunkModule } from './brew-punk.module';
import { BrewPunkListContainer } from './containers';
import { LoadBrewsGuard } from './guards';

const routes: Routes = [
  { path: '', component: BrewPunkListContainer, canActivate: [LoadBrewsGuard] },
];

@NgModule({
  imports: [BrewPunkModule, RouterModule.forChild(routes)],
  providers: [LoadBrewsGuard],
})
export class BrewPunkRoutingModule {}
