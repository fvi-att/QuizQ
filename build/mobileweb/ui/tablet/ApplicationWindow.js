//Application Window Component Constructor
function ApplicationWindow() {


	//load component dependencies
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var INTRODUCE_PAGES = 10;

	var FirstView = require('ui/common/FirstView');

	
		
	var status = {population:Titanium.App.Properties.getInt('civ_population'),
				  food:   Titanium.App.Properties.getInt('civ_food'),
				  culture:Titanium.App.Properties.getInt('civ_culture'),
				  money:Titanium.App.Properties.getInt('civ_money')}
				  
	var status_message = '人口：'	+status.population;+',食料：'+status.food;//+',文化値：'status.culture+',財政：'+status.money;
	
	var self = require('/ui/common/MyCivilizationWindow').openCivilView()

	
	//簡単な説明文の機能をカットするよ
	Titanium.App.Properties.setBool('isIntroNeed',false);


	var introViews = [];
	if (Titanium.App.Properties.getBool('isIntroNeed')) {
		for (var cnt = 0; cnt < INTRODUCE_PAGES; cnt++) {
			var cnt_char = "" + (cnt + 1);
			var introView = new require('/ui/common/first_intro/first_introView')('intro_mes' + cnt_char, '/xicolo.png');
			introViews.push(introView)
		}
	}
	/*
	//introViews.push(new require('/ui/common/TopView')());
	introViews.push(require('/ui/common/MyCivilizationWindow').openCivilView());
	//トップビューは別の機会に表示することに変更
	//introViews.push(new require('/ui/common/TopView')());

	introViews.push(new require('/ui/common/ProjectListView')());
	//ソーシャルウィンドウは一旦閉鎖
	//introViews.push(new require('/ui/common/MatomeView')());

	// 上記のviewを配列としてviewsプロパティに引き渡します。
	var scrollView = Titanium.UI.createScrollableView({
		views : introViews,
		showPagingControl : false,
		pagingControlHeight : 30,
		pagingControlColor : 'black',
		maxZoomScale : 2.0
	});
	// スクロールビューを配置する
	self.add(scrollView);
	*/
	if (Titanium.Platform.osname == 'android') {

		//まずはじめにメニューを表示できるようにする
	/*
		self.activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var menuItem = menu.add({
				title : "設定"
			});
			menuItem.setIcon("/images/icon/light_gears.png");
			menuItem.addEventListener("click", function(e) {
				require('/ui/common/ConfigWin').OpenConfigWin();
				//設定画面を展開する。
			});
		};
	*/
	}

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
