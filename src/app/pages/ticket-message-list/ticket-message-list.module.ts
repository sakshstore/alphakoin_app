import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketMessageListPageRoutingModule } from './ticket-message-list-routing.module';

import { TicketMessageListPage } from './ticket-message-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketMessageListPageRoutingModule
  ],
  declarations: [TicketMessageListPage]
})
export class TicketMessageListPageModule {}
