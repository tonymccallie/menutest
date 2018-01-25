import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellDashboardPage } from './sell-dashboard';

@NgModule({
  declarations: [
    SellDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SellDashboardPage),
  ],
})
export class SellDashboardPageModule {}
