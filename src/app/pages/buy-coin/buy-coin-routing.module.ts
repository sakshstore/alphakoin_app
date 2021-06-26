import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyCoinPage } from './buy-coin.page';

const routes: Routes = [
  {
    path: '',
    component: BuyCoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyCoinPageRoutingModule {}
