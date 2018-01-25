import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	segment: 'buytabs'
})
@Component({
	selector: 'page-buy-tabs',
	templateUrl: 'buy-tabs.html',
})
export class BuyTabsPage {
	tab1Root: any = 'BuyDashboardPage';
	tab2Root: any = 'BuyInfoPage';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log(this);
	}

	ionViewDidLoad() {
		console.log(['ionViewDidLoad BuyTabsPage',this]);
	}

}
