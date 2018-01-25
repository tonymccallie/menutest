import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyInfoPage } from './buy-info';

@NgModule({
  declarations: [
    BuyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyInfoPage),
  ],
})
export class BuyInfoPageModule {}
