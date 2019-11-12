import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewPunkModule } from './brew-punk.module';

const routes: Routes = [];

@NgModule({
  imports: [BrewPunkModule, RouterModule.forChild(routes)],
})
export class BrewPunkRoutingModule {}
