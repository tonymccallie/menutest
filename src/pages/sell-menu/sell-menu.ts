import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';

@IonicPage({
	segment: 'sell'
})
@Component({
	selector: 'page-sell-menu',
	templateUrl: 'sell-menu.html',
})
export class SellMenuPage {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = 'SellTabsPage';

	pages: Array<{ title: string, component: any, index?: number, notab?: boolean }>;

	constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
		this.pages = [
			{ title: 'Dashboard', component: 'SellDashboardPage', index: 0 },
			{ title: 'Info', component: 'SellInfoPage', index: 1 },
			{ title: 'Push page on tabs', component: 'SellTablessPage' },
			{ title: 'No tabs', component: 'SellTablessPage', notab: true },
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
