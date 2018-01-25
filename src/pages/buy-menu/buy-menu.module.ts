import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyMenuPage } from './buy-menu';

@NgModule({
  declarations: [
    BuyMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyMenuPage),
  ],
})
export class BuyMenuPageModule {}
