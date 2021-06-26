import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { BuyCoinPageRoutingModule } from './buy-coin-routing.module';

import { BuyCoinPage } from './buy-coin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    BuyCoinPageRoutingModule
  ],
  declarations: [BuyCoinPage]
})
export class BuyCoinPageModule {}
