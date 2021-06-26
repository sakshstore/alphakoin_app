import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendCoinPageRoutingModule } from './send-coin-routing.module';

import { SendCoinPage } from './send-coin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    SendCoinPageRoutingModule
  ],
  declarations: [SendCoinPage]
})
export class SendCoinPageModule {}
