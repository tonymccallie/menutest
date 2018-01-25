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

	pages: Array<{ title: string, component: any, index?: number, notab?: boolean }>;

	constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
		this.pages = [
			{ title: 'Dashboard', component: 'BuyDashboardPage', index: 0 },
			{ title: 'Info', component: 'BuyInfoPage', index: 1 },
			{ title: 'Push page on tabs', component: 'BuyTablessPage' },
			{ title: 'No tabs', component: 'BuyTablessPage', notab: true },
			{ title: 'Return to Start', component: 'StartPage' },
		];
	}

	openPage(page) {
		if(page.component == 'StartPage') {
			this.app.getRootNavs()[0].setRoot(page.component);
		} else {
			if(page.notab != undefined && page.notab) {
				this.nav.push(page.component);
			} else {
				if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
					this.nav.getActiveChildNavs()[0].select(page.index);
				} else {
					// Tabs are not active, so reset the root page 
					// In this case: moving to or from SpecialPage
					this.nav.getActiveChildNavs()[0].getSelected().push(page.component);
				}
			}
		}
	}

}
