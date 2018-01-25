import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellTabsPage } from './sell-tabs';

@NgModule({
  declarations: [
    SellTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellTabsPage),
  ],
})
export class SellTabsPageModule {}
