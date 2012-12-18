/**
 * @author fvi
 * 
 * created @ 2012 12 02
 */

function CommonTableWin(){

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
		height : height * 0.8
	});
	
	win.table = flowTableView;
	
	//	win.add(searchBar);
	win.add(flowTableView);

	var close_button = Titanium.UI.createButton({
		title : '閉じる',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.9
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
		height : width *0.2 *7 /15,
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