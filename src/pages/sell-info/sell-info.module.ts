import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellInfoPage } from './sell-info';

@NgModule({
  declarations: [
    SellInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SellInfoPage),
  ],
})
export class SellInfoPageModule {}
