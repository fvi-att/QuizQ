/**
 * @author fvi
 *
 * created @ 2012 12 02
 */

function CommonTableWin() {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var win = Titanium.UI.createWindow({
		title : L('collection'),
		navBarHidden : true, //タイトルバーを隠す
		//backgroundImage : '/images/opening/old_paper.jpg',
		backgroundColor : 'rgb(255,235,205)', //ivory color

		exitOnClose : false,
		fullscreen : true,
		orientationModes : [Titanium.UI.PORTRAIT]

	});

	var projectList = [];

	// Create a Tablewin.　フロービューに関する処理
	var flowTableView = Ti.UI.createTableView({
		data : projectList,
		showVerticalScrollIndicator : true,
		top : height * 0.1,
		width : width,
		height : height * 0.78
	});

	win.table = flowTableView;

	//	win.add(searchBar);
	win.add(flowTableView);
	
	
	flowTableView.addEventListener('scrollEnd',function(e){
		//alert('scrollEnd');
	})

	//アンダーバーのイメージUIを追加する
	var under_UI_ImageView = Titanium.UI.createImageView({
		image : '/images/navibar/flow_under.png',
		width : Titanium.UI.FILL,
		height : height *0.3,

		top : height * 0.85

	});

	win.add(under_UI_ImageView);

	var close_button = Titanium.UI.createButton({
		title : '閉じる',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.92
	});

	close_button.addEventListener('click', function(e) {
		win.close();
		//delete win;
	});

	win.add(close_button);

	//ナビゲーションバーの設定 上部分に関する設定
	var navi_bar = Titanium.UI.createImageView({
		image : '/images/navibar/flow_navibar.png',
		width : width,
		height : 'auto',
		top : 0
	});

	win.add(navi_bar);

	var info_button = Titanium.UI.createButton({
		backgroundImage : '/images/navibar/nav_button/info/info_nav_button.png',
		backgroundSelectedImage : '/images/navibar/nav_button/info/info_nav_button_pressed.png',
		width : width * 0.2,
		height : width * 0.2 * 7 / 15,
		left : width * 0.03,
		top : height * 0.02

	});

	info_button.addEventListener('click', function(e) {
		require('/ui/common/Help/helpWin').openWin('http://xicolo.com/wordpress/?page_id=179#timeLine');
	})

	win.add(info_button);

	var config_button = Titanium.UI.createButton({
		backgroundImage : '/images/navibar/nav_button/config/config_nav_button.png',
		backgroundSelectedImage : '/images/navibar/nav_button/config/config_nav_button_pressed.png',
		width : width * 0.2,
		height : width * 0.2 * 7 / 15,
		right : width * 0.03,
		top : height * 0.02
	});
	config_button.addEventListener('click', function(e) {
		require('/ui/common/ConfessWindow/ConfigWin').OpenConfigWin();
	});

	win.add(config_button);

	//広告を入れるか入れないかを　ここで判断
	if (true) {
		
		flowTableView.setHeight(height * 0.7)
		under_UI_ImageView.setTop(height * 0.76);
		//admob 追加
		// require AdMob
		var Admob = require('ti.admob');

		// then create an adMob view
		var adMobView = Admob.createView({
			publisherId : "a150bf49d1e3f16",
			testing : false, // default is false
			//top: 10, //optional
			//left: 0, // optional
			//right: 0, // optional
			bottom : height * 0.085, // optional
			adBackgroundColor : "FF8855", // optional
			backgroundColorTop : "738000", //optional - Gradient background color at top
			borderColor : "#000000", // optional - Border color
			textColor : "#000000", // optional - Text color
			urlColor : "#00FF00", // optional - URL color
			linkColor : "#0000FF" //optional -  Link text color
			//primaryTextColor: "blue", // deprecated -- now maps to textColor
			//secondaryTextColor: "green" // deprecated -- now maps to linkColor

		});
		win.add(adMobView);
	}
	//設定画面を表示する
	win.activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var menuItem = menu.add({
			title : "設定"
		});
		menuItem.setIcon("/images/icon/light_gears.png");
		menuItem.addEventListener("click", function(e) {
			require('/ui/common/ConfessWindow/ConfigWin').OpenConfigWin();
			//設定画面を展開する。
		});
	};

	win.open();

	return win;
}

module.exports = CommonTableWin;
