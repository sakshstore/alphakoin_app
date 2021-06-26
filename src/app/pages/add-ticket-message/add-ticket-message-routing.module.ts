import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTicketMessagePage } from './add-ticket-message.page';

const routes: Routes = [
  {
    path: '',
    component: AddTicketMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTicketMessagePageRoutingModule {}
