/*
 * 
 * 
 * 
 * 
 * 
 * 
 */


exports.createCardWindow = function(){
		
	var junel ='ひとりごと'//デフォルト　ジャンル
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;


	var background_path = require('/util/getbackPathWithTime').getPath();
	var win = Titanium.UI.createWindow({
		title : '',
		backgroundImage : background_path,
		exitOnClose : false,
		fullscreen : false,
		navBarHidden: true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var backImageView = Titanium.UI.createImageView({
		image : '/images/opening/old_paper.jpg',
		width : width*0.98,
		height : height * 0.81,
		top : height *0.01
	});
	win.add(backImageView);
	
	
	var card2= require('/ui/common/AddCardWindow/ConfessCard').createCard('blue');
		card2.center = {x:width *0.52,y:height *0.275};
	win.add(card2);
	
	var card1= require('/ui/common/AddCardWindow/ConfessCard').createCard('STUB');
		card1.center = {x:width *0.48,y:height *0.225};
	win.add(card1);
		
	var flip_button = Titanium.UI.createButton({
		title:'チェ！',
		center:{x:width *0.85,y:height *0.45}
		});
	flip_button.addEventListener('click',function(e){
		alert('STUB フリップボタンが押されました');
	});
	win.add(flip_button);
/*
	var textArea = Titanium.UI.createTextArea({
		hintText : 'あなたの秘密のつぶやきをどうぞ\n(200字以内)',
		textAlign:'center',
		width:width *0.95,
		height : height * 0.45,
		top : height *0.05
	});

	win.add(textArea);
*/
	var junel_button = Titanium.UI.createButton({
		title : 'ジャンル',
		width : width * 0.7,
		height : height * 0.1,
		top : height * 0.5,
		
	});

	junel_button.addEventListener('click', function(e) {
		require('/ui/common/AddField/Selectjunel').openView(win);

	});

	win.add(junel_button);

	var project_image = new require('/ui/common/imageFrame/MenuProjectFrame')();

	project_image.setTop(height * 0.6);
	project_image.setLeft(width * 0.5);

	win.add(project_image);
	var handlename_label = Titanium.UI.createLabel({
		text : 'ハンドルネーム ',
		textAligin:'center',
		color : 'black',
		top : height * 0.6,
		left: width * 0.1,
		font : {
			fontSize : 15
		}
	});
	win.add(handlename_label);
	
	
	var handlename_SW = Titanium.UI.createSwitch({

		value : Titanium.App.Properties.getBool('use_handlename'),
		top : height * 0.63,
		width:width * 0.3,
		height:height * 0.15,
		left:width *0.1
	});
		handlename_SW.addEventListener('change', function(e) {
		// e.valueにはスイッチの新しい値が true もしくは falseとして設定されます。

		Titanium.App.Properties.setBool('use_handlename', e.value);

	});
	win.add(handlename_SW);
	var and_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/And/button.png',
		backgroundSelectedImage : '/images/button/And/button_pressed.png',
		height : height * 0.2,
		width : height * 0.2,
		top : height * 0.6,
		left : width * 0.05

	});
	//and_button.setTouchEnabled(false);
	and_button.setOpacity(0.5);
	
	and_button.addEventListener('click',function(e){
		Titanium.UI.createNotification({
			duration : 3000,
			message : "たくさんつぶやくと使えるようになるかも"
		}).show();
	})

//	win.add(and_button);

	var ok_button = new require('/ui/common/button/button')('tweet');
	ok_button.setTop(height * 0.82);
	
	

	ok_button.addEventListener('click', function(e) {
		if (textArea.value == '' ) {
			alert('中に何もつぶやかれていませんよ！');
			return　false;
		}
		/*
		if(textArea.value.length > 200){
			alert('200文字以上は投稿できません');
			return false;
		}
		//if(project_image.imagePath)
			  // require('/ACS/UploadImage').UploadImage(project_image.imagePath);
		
		 require('/ACS/Confess/CreatePost').createPost(textArea.value,textArea.value,junel,project_image.imagePath,Titanium.App.Properties.getBool('use_handlename'));
	*/
	});
	Titanium.App.addEventListener('select_junel',function(e){
		junel = e.junel;
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