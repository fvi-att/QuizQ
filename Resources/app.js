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
//(function で即時関数なんだって～　そうなの)
(function() {
	//determine platform and form factor and render approproate components
	

	//データベース管理をここで行う
	require('/DB/SQL').CreateTable();
	//プロパティの定義に関する処理
	require('/util/setProperty').setProperty();
	
	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
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
	 * かなしいかぎりじゃ
	 if(Titanium.App.Properties.getString('user_name') == null)
	 require('/ui/common/CreateUserView').CreateUserWin();
	 */
})();


