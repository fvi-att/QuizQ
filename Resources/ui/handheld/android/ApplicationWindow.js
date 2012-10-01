//Application Window Component Constructor
function ApplicationWindow() {


	//load component dependencies
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var self = require('/ui/common/MyCivilizationWindow').openCivilView()

	
	//簡単な説明文の機能をカットするよ
	Titanium.App.Properties.setBool('isIntroNeed',false);

	//上の設定がfalseの限りこのコードは停止しています
	var INTRODUCE_PAGES = 10;	
	var introViews = [];
	if (Titanium.App.Properties.getBool('isIntroNeed')) {
		for (var cnt = 0; cnt < INTRODUCE_PAGES; cnt++) {
			var cnt_char = "" + (cnt + 1);
			var introView = new require('/ui/common/first_intro/first_introView')('intro_mes' + cnt_char, '/xicolo.png');
			introViews.push(introView)
		}
	}

	if (Titanium.Platform.osname == 'android') {

		//まずはじめにメニューを表示できるようにする

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

	}

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
