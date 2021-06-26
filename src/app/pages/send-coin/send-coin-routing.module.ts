import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendCoinPage } from './send-coin.page';

const routes: Routes = [
  {
    path: '',
    component: SendCoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendCoinPageRoutingModule {}
