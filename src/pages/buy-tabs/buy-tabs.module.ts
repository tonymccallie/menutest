import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyTabsPage } from './buy-tabs';

@NgModule({
  declarations: [
    BuyTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyTabsPage),
  ],
})
export class BuyTabsPageModule {}
