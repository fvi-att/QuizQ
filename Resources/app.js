/*
* Single Window Application Template:
* A basic starting point for your application.  Mostly a blank canvas.
*
* In app.js, we generally take care of a few things:
* - Bootstrap the application with any data we need
* - Check for dependencies like device type, platform version or network connection
* - Require and open our top-level UI component
*
*/

//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components

	//データベース管理をここで行う
	require('/DB/SQL').CreateTable();

	//パラメータ値の管理
	//人間のおしゃべり機能に関するパラメータ　を文字列で表現する
	if (!Titanium.App.Properties.hasProperty('prmt_talk'))
		Titanium.App.Properties.setString('prmt_talk', 'first_contact');

	if (!Titanium.App.Properties.hasProperty('civ_population'))
		Titanium.App.Properties.setInt('civ_population', 10);

	if (!Titanium.App.Properties.hasProperty('civ_food'))
		Titanium.App.Properties.setInt('civ_food', 30);

	if (!Titanium.App.Properties.hasProperty('civ_culture'))
		Titanium.App.Properties.setInt('civ_culture', 5);

	if (!Titanium.App.Properties.hasProperty('civ_money'))
		Titanium.App.Properties.setInt('civ_money', 50);

	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));

	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	} else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		} else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	new Window().open({
		fullscreen : true
	});
	//ここでfullscreen設定をしておかないと Undefinedが出る
	//オープニング
	require('/ui/common/Opening/OpeningWindow').openWindow();

	/*
	 * 
	 *ユーザ登録をさせようと思ったけど初期の段階では使わないことが決定
	 if(Titanium.App.Properties.getString('user_name') == null)
	 require('/ui/common/CreateUserView').CreateUserWin();
	 */
})();


