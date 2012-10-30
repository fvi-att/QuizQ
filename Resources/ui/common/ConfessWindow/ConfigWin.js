/**
 * @author fvi
 * created at 2012 07 19
 */

exports.OpenConfigWin = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var win = Titanium.UI.createWindow({
		title : 'ひみつぶやきフローの設定',
		backgroundImage:'/images/opening/old_paper.jpg',
		exitOnClose : false,
		fullscreen : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var introSW_label = Titanium.UI.createLabel({
		text : 'ひみつぶやきの流れを変更する\n'+
				'ON:上から下へ,OFF:下から上へ',
		color : 'black',
		top : height * 0.25,
		font : {
			fontSize : 20
		}
	});

	var introSW = Titanium.UI.createSwitch({
		value : Titanium.App.Properties.getBool('flow_side'),
		top : height * 0.4
	});

	introSW.addEventListener('change', function(e) {
		// e.valueにはスイッチの新しい値が true もしくは falseとして設定されます。

		Titanium.App.Properties.setBool('flow_side', e.value);

		Titanium.UI.createNotification({
			duration : 2000,
			message : "設定を変更しました\n次回更新時から反映されます"
		}).show();

	});

	var account_man = Titanium.UI.createButton({
		title : 'ログイン管理',
		textAlign : 'center',
		top : height * 0.8,
		width : width * 0.75
	});

	account_man.addEventListener('click', function(e) {
		var back_view = Titanium.UI.createView({
			backgroundColor : 'white',
			width : Titanium.UI.FILL,
			height : height * 0.1,
			opacity : 1.0,
			layout : 'vertical'

		})
		var input_text = Ti.UI.createTextField({
			hintText : 'ID',
			width : Titanium.UI.FILL,
			textAlign : 'center',
			opacity : 1.0,
			left : 0
		});
		var input_password = Ti.UI.createTextField({
			hintText : 'Password',
			width : Titanium.UI.FILL,
			textAlign : 'center',
			passwordMask : true,
			opacity : 1.0,
			left : back_view.width * 0.5
		});

		back_view.add(input_text);
		back_view.add(input_password);
		
		var user_name='名無しさん';
					
		var dialog = Ti.UI.createOptionDialog({
			title : 'account status\n ID:'+user_name,
			androidView : back_view,
			buttonNames : ['Cancel', 'Ok']
		});

		dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				require('/ACS/LogoutACS').LogoutACS();
				
				require('/ACS/LoginACS').LoginACS(input_text.value,input_password.value);
					
			}
		});

		dialog.show();
	});

	win.add(introSW_label);
	win.add(introSW);
	


	win.add(introSW_label);
	win.add(introSW);
	win.add(account_man);


	win.open();

}
