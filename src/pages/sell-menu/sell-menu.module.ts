import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellMenuPage } from './sell-menu';

@NgModule({
  declarations: [
    SellMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SellMenuPage),
  ],
})
export class SellMenuPageModule {}
