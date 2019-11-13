import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewPunkModule } from './brew-punk.module';
import { BrewPunkListContainer } from './containers';

const routes: Routes = [{ path: '', component: BrewPunkListContainer }];

@NgModule({
  imports: [BrewPunkModule, RouterModule.forChild(routes)],
})
export class BrewPunkRoutingModule {}
