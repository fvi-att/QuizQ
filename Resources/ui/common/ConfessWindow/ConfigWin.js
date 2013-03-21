/**
 * @author fvi
 * created at 2012 07 19
 */

exports.OpenConfigWin = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var win = require('/ui/common/CommonNavigationWindow').createCommonNavigationWindow()/*Titanium.UI.createWindow({
		title : '設定',
		backgroundImage:'/images/opening/old_paper.jpg',
		exitOnClose : false,
		fullscreen : false,
		
		orientationModes : [Titanium.UI.PORTRAIT]
	});*/
	
	

	var introSW_label = Titanium.UI.createLabel({
		text : 'ひみつぶやきの流れを変更する\n'+
				'ON:上から下へ,OFF:下から上へ',
		color : 'black',
		top : height * 0.15,
		font : {
			fontSize : 20
		}
	});

	var introSW = Titanium.UI.createSwitch({
		value : Titanium.App.Properties.getBool('flow_side'),
		top : height * 0.3
	});

	introSW.addEventListener('change', function(e) {
		// e.valueにはスイッチの新しい値が true もしくは falseとして設定されます。

		Titanium.App.Properties.setBool('flow_side', e.value);

		Titanium.UI.createNotification({
			duration : 2000,
			message : "設定を変更しました\n次回更新時から反映されます"
		}).show();

	});
	
	var opening_SWLabel = Titanium.UI.createLabel({
		text : 'オープニングを起動時に表示する',
		color : 'black',
		top : height * 0.4,
		font : {
			fontSize : 20
		}
	});



	var opening_SW = Titanium.UI.createSwitch({
		value : Titanium.App.Properties.getBool('setOpening'),
		top : height * 0.55
	});
	
	opening_SW.addEventListener('change',function(e){
		Titanium.App.Properties.setBool('setOpening', e.value);

		Titanium.UI.createNotification({
			duration : 2000,
			message : "設定を変更しました\n次回更新時から反映されます"
		}).show();
	})
	
	
	
	var handlename = Titanium.App.Properties.getString('handlename');
	if(!handlename)
		handlename = '名無しさん';
		
		
	var handlename_label = Titanium.UI.createLabel({
		text :'現在のハンドルネーム\n'+
				handlename,
		textAligin:'center',
		color : 'black',
		top : height * 0.65,
		font : {
			fontSize : 20
		}
	});
	Titanium.App.addEventListener('change_handlename',function(e){
		handlename_label.setText('現在のハンドルネーム\n'+Titanium.App.Properties.getString('handlename'));
		
	});
	
	win.add(handlename_label);
	
	var change_handlenameButton = Titanium.UI.createButton({
		title:'ハンドルネームを変更',
		textAlign : 'center',
		top : height * 0.75,
		width : width * 0.75
	});
	
		change_handlenameButton.addEventListener('click', function(e) {
		var back_view = Titanium.UI.createView({
			backgroundColor : 'white',
			width : Titanium.UI.FILL,
			height : height * 0.1,
			opacity : 1.0,
			layout : 'vertical'

		})
		var input_text = Ti.UI.createTextField({
			hintText : 'ハンドルネーム',
			width : Titanium.UI.FILL,
			textAlign : 'center',
			opacity : 1.0,
			left : 0
		});


		back_view.add(input_text);
		
		
		var user_name=Titanium.App.Properties.getString('handlename');
		if(!user_name)
			user_name='名無しさん';
					
		var dialog = Ti.UI.createOptionDialog({
			title : '現在のハンドルネーム\n:'+user_name,
			androidView : back_view,
			buttonNames : ['キャンセル', 'Ok']
		});

		dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				if(input_text.value == ''){
					alert('ハンドルネームを入れて下さい');
					return;
				}
				if(input_text.value.match(/■/)){
					alert('■は運営専用の記号です。');
					return;
				}
				if(input_text.value == 'xicolo_dev')
					input_text.value = '■開発者';
				
				//デバッグ用コマンド　ポイントを３０ポイント付加する
				if(input_text.value == 'xicolo_point'){
					alert('DEBUG::ポイントを負荷しました');
					Titanium.App.Properties.setInt('point',Titanium.App.Properties.getInt('point') + 30);
					return;
				}
				if(input_text.value == 'xi_st_reset'){
					alert('DEBUG::すべての更新をリセットしました')
					for(cnt = 1;cnt <= 9;cnt++){
						Titanium.App.Properties.setBool('event_batch'+cnt, true);
					}
					
					return;
				}

					
				
				Titanium.App.Properties.setString('handlename',input_text.value);
				
				Titanium.App.fireEvent('change_handlename');
					
			}
		});

		dialog.show();
	});
	win.add(change_handlenameButton);
	
	//別のアカウントでログインできる機能を一時的に廃止

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
	
	var upperRibbonLabel = Titanium.UI.createImageView({
			image:'/images/navibar/config/configLabel.png',
			
			width:width /2.5,
			height:height /15,
			center:{x:width * 0.52,y:height *0.05}
	})
	
	win.add(upperRibbonLabel)

	win.add(introSW_label);
	win.add(introSW);
	
	win.add(opening_SWLabel)
	win.add(opening_SW)


	win.open();

}
