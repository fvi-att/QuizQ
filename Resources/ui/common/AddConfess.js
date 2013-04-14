/**
 * @author fvi@
 * created@ 2012 07 18
 *
 *
 */

//STUB ADD HELLO BOY
exports.AddProject = function() {
	
	var junel ='ひとりごと'//デフォルト　ジャンル
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;


	var background_path = require('/util/getbackPathWithTime').getPath()
	
	
	var win =require('/ui/common/CommonNavigationWindow').createCommonNavigationWindow() 
	
	
	var textArea = Titanium.UI.createTextArea({
		hintText : 'あなたの秘密のつぶやきをどうぞ\n(200字以内)',
		textAlign:'center',
		width:width *0.95,
		height : height * 0.45,
		top : height *0.1
	});

	win.add(textArea);

	var junel_button = Titanium.UI.createButton({
		title : 'ジャンル:ひとりごと',
		width : width * 0.85,
		height : height * 0.1,
		top : height * 0.55,
		
	})
	
	win.add(junel_button)

	junel_button.addEventListener('click', function(e) {
		//require('/ui/common/AddField/Selectjunel').openView(win);
		var back_view = Titanium.UI.createView({
			backgroundColor : 'white',
			width : Titanium.UI.FILL,
			height : height * 0.1,
			opacity : 1.0,
			layout : 'vertical'

		})
		var input_text = Ti.UI.createTextField({
			hintText : 'ジャンルを入れてください',
			width : Titanium.UI.FILL,
			textAlign : 'center',
			opacity : 1.0,
			left : 0
		});
		
		back_view.add(input_text)
		
		
		var dialog = Ti.UI.createOptionDialog({
			title : '#ひとりごと',
			androidView : back_view,
			buttonNames : ['キャンセル', 'Ok']
		})
		
		dialog.addEventListener('click', function(e) {
			if (e.index == 1) {// we read it only if get it is pressed
				if(input_text.value == ''){
					alert('ジャンル名を入れていください');
					return;
				}
				if(input_text.value.match(/■/)){
					alert('■は運営専用の記号です。');
					return;
				}
				if(input_text.value == 'xicolo_dev')
					input_text.value = '■開発者';
					
				
				Titanium.App.fireEvent('select_junel',{junel:input_text.value});
					
			}
		});
		
		dialog.show()

	});

	

	var addImageButton= new require('/ui/common/imageFrame/MenuProjectFrame')();

	addImageButton.setTop(height * 0.65);
	addImageButton.setRight(width * 0.075);

	win.add(addImageButton);
	
	
	var handlename_label = Titanium.UI.createLabel({
		text : 'ハンドルネーム ',
		textAligin:'center',
		color : 'black',
		top : height * 0.65,
		left: width * 0.075,
		font : {
			fontSize : 15
		}
	});
	win.add(handlename_label);
	
	
	var handlename_SW = Titanium.UI.createSwitch({

		value : Titanium.App.Properties.getBool('use_handlename'),
		top : height * 0.68,
		width:width * 0.3,
		height:height * 0.15,
		left:width *0.075
	});
		handlename_SW.addEventListener('change', function(e) {
		// e.valueにはスイッチの新しい値が true もしくは falseとして設定されます。
		
		Titanium.App.Properties.setBool('use_handlename', e.value);

	});
	win.add(handlename_SW);
	
	
	var ok_button = Titanium.UI.createButton({
		height:height * 0.1,
		width:width * 0.6,
		backgroundImage:'/images/button/tweet/navibar/button.png',
		backgroundSelectedImage:'/images/button/tweet/navibar/button_pressed.png',
		top:height *0.9
	})
	
	

	ok_button.addEventListener('click', function(e) {
		if (textArea.value == '' ) {
			alert('中に何もつぶやかれていませんよ！');
			return false;
		}
		
		if(textArea.value.length > 200){
			alert('200文字以上は投稿できません');
			return false;
		}
	
		 require('/ACS/Confess/CreatePost').createPost(textArea.value,junel,addImageButton.imagePath,Titanium.App.Properties.getBool('use_handlename'));

	});
	
	var upperRibbonLabel = Titanium.UI.createImageView({
			image:'/images/navibar/tweet/tweetLabel.png',
			
			width:width /2.5,
			height:height /15,
			center:{x:width * 0.5,y:height *0.05}
	})
	
	win.add(upperRibbonLabel)
	
	Titanium.App.addEventListener('select_junel',function(e){
		//広域変数　junel は危険　レキシカル変数に変更せよ
		junel = e.junel		
		junel_button.setTitle('ジャンル：'+e.junel)
	})
	
	
	Titanium.App.addEventListener('complete_post',function(e){
		win.close();
		//delete win;
		
		Titanium.UI.createNotification({
			duration : 3000,
			message : "つぶやきました"
		}).show();

		
	});
	
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
	
	win.add(ok_button);

	win.open();

	return win;
}

