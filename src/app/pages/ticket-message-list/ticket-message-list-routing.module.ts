import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketMessageListPage } from './ticket-message-list.page';

const routes: Routes = [
  {
    path: '',
    component: TicketMessageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketMessageListPageRoutingModule {}
