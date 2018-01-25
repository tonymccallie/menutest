import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';

@IonicPage({
	segment: 'buy'
})
@Component({
	selector: 'page-buy-menu',
	templateUrl: 'buy-menu.html',
})
export class BuyMenuPage {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'BuyTabsPage';

	pages: Array<{ title: string, component: any, tab: boolean }>;

	constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
		console.log(this);
		this.pages = [
			{ title: 'Dashboard', component: 'SellDashboardPage', tab: false },
			{ title: 'Start', component: 'StartPage', tab: false }
		];

	}

	openPage(page) {
		this.app.getRootNavs()[0].setRoot(page.component);
	}

}
