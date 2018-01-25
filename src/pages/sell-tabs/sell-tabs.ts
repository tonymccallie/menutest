import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	segment: 'selltabs'
})
@Component({
	selector: 'page-sell-tabs',
	templateUrl: 'sell-tabs.html',
})
export class SellTabsPage {
	tab1Root: any = 'SellDashboardPage';
	tab2Root: any = 'SellInfoPage';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log(this);
	}

	ionViewDidLoad() {
		console.log(['ionViewDidLoad SellTabsPage',this]);
	}

}
