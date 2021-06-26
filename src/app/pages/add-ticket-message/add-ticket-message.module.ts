import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTicketMessagePageRoutingModule } from './add-ticket-message-routing.module';

import { AddTicketMessagePage } from './add-ticket-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    AddTicketMessagePageRoutingModule
  ],
  declarations: [AddTicketMessagePage]
})
export class AddTicketMessagePageModule {}
