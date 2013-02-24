/*
 * created @ 2012 09 10
 *
 * created by fvi@
 *
 *
 */

exports.openCivilView = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var food_arr = [];

	var background_path = require('/util/getbackPathWithTime').getPath();

	function isTimeAlreadyPass() {
		//getTimeはミリ秒で表示されているのでここでは一日を超えているかいなかを確認している
		if (Titanium.App.Properties.getDouble('lastTime') < new Date().getTime() - 1000 * 60 * 60 * 24)
			return true;//一日経過しているのでポイントの取得ができるようにする。

		return false;
	}

	var civ_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(255,235,205)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	//旧家に関するボタン

	function createButton() {
		var base_button = Titanium.UI.createView({
			width : width / 3,
			height : height / 5,
			backgroundImage :'/images/button/topMenuButton/topMenuButton.png',
			backgroundSelectedImage : '/images/button/topMenuButton/topMenuButton_pressed.png',
		});
		
	var label  = Titanium.UI.createLabel({
		text : 'text',
		color : 'black',
		bottom:height *0.015,
		textAlign:'center',
		font : {
			fontSize : height / 50
		}
	});
		base_button.label = label;
		base_button.add(label);

	var icon = Titanium.UI.createImageView({
		width:'auto',
		height:'auto',
		center:{x:base_button.getWidth()/2,y:base_button.getHeight()/2}
	})
		base_button.icon = icon
		base_button.add(icon)
	
		civ_window.add(base_button)
	
		return base_button;
	}
	
	var delta_buttonLayout = height/10//height /10
	
	var sampleUIButton1 = createButton()
	//sampleUIButton1.setTitle('ヘルプ')
	sampleUIButton1.setTop(delta_buttonLayout +1)
	sampleUIButton1.setLeft(0);
	sampleUIButton1.label.setText('ヘルプ')
	sampleUIButton1.icon.setImage('/images/icon/topmenu/help.png')
	
	sampleUIButton1.addEventListener('click',function(e){
		require('/ui/common/Help/helpWin').openWin()
	})

	var sampleUIButton2 = createButton()
	sampleUIButton2.setTop(delta_buttonLayout +1)
	sampleUIButton2.setLeft(width / 3)
	//sampleUIButton2.setTitle('コツをつぶやく')
	sampleUIButton2.label.setText('コツをつぶやく')
	sampleUIButton2.icon.setImage('/images/icon/topmenu/card.png')
	sampleUIButton2.addEventListener('click', function(e) {
		require('/ui/common/AddCardWindow/AddCardWindow').createCardWindow();
	})

	var sampleUIButton3 = createButton()
	sampleUIButton3.setTop(delta_buttonLayout +1)
	sampleUIButton3.setLeft(width *2 /3)
	//sampleUIButton3.setTitle('どうやって\n遊ぶの？')
	sampleUIButton3.label.setText('お知らせ')
	sampleUIButton3.icon.setImage('/images/icon/topmenu/broadcast.png')
	sampleUIButton3.addEventListener('click',function(e){
		require('/ui/common/Help/helpWin').openWin('http://xicolo.com/wordpress/?page_id=347')
	})
	
	var sampleUIButton4 = createButton()
	sampleUIButton4.setTop(height /5 + delta_buttonLayout +1)
	sampleUIButton4.setLeft(0)
	//sampleUIButton4.setTitle('設定')
	sampleUIButton4.label.setText('設定')
	sampleUIButton4.icon.setImage('/images/icon/topmenu/setting.png')
	
	sampleUIButton4.addEventListener('click',function(e){
		require('/ui/common/ConfessWindow/ConfigWin').OpenConfigWin()
	})
	
	var sampleUIButton5 = createButton()
	sampleUIButton5.setTop(height /5 + delta_buttonLayout +1)
	sampleUIButton5.setLeft(width /3)
	//sampleUIButton5.setTitle('みんなの\nつぶやき')
	sampleUIButton5.label.setText('みんなの\nひみつぶやき')
	sampleUIButton5.icon.setImage('/images/icon/topmenu/everybody2.png')
	
	
	sampleUIButton5.addEventListener('click',function(e){
		require('/Confess/ConfessStarter_Newest').FlowdownloadStart();
	})
	
	var sampleUIButton6 = createButton()
	sampleUIButton6.setTop(height /5 + delta_buttonLayout +1)
	sampleUIButton6.setLeft(width *2/3)
	//sampleUIButton6.setTitle('ポイント確認')
	sampleUIButton6.label.setText('ポイント確認')
	
	var sampleUIButton7 = createButton()
	sampleUIButton7.setTop(height *2/5 + delta_buttonLayout)
	sampleUIButton7.setLeft(0)
	//sampleUIButton7.setTitle('sample7')
	sampleUIButton7.label.setText('工事中')
	sampleUIButton7.icon.setImage('/images/icon/topmenu/construction.png')
	
	var sampleUIButton8 = createButton()
	sampleUIButton8.setTop(height *2/5 + delta_buttonLayout)
	sampleUIButton8.setLeft(width /3)
	//sampleUIButton8.setTitle('マイ\nつぶやき')
	sampleUIButton8.label.setText('マイ\nひみつぶやき')
	sampleUIButton8.icon.setImage('/images/icon/topmenu/mytweet.png')
	sampleUIButton8.addEventListener('click',function(e){
		require('/Confess/getMyConfessData').getMyConfess();
	});
	
	var sampleUIButton9 = createButton()
	sampleUIButton9.setTop(height *2/5 + delta_buttonLayout)
	sampleUIButton9.setLeft(width *2/3)
	//sampleUIButton9.setTitle('ポイント\nゲット！')
	sampleUIButton9.label.setText('工事中')
	sampleUIButton9.icon.setImage('/images/icon/topmenu/construction.png')
	
	var tweetButton = Titanium.UI.createView({
			width:Titanium.UI.FILL,
			height : height - (sampleUIButton9.getTop() + height/5 + delta_buttonLayout),
			top:height *3/5 + delta_buttonLayout +1,
			backgroundImage :'/images/button/topMenuButton/topMenuButton.png',
			backgroundSelectedImage : '/images/button/topMenuButton/topMenuButton_pressed.png',
		});
		
	var tweetButtonIcon = Titanium.UI.createImageView({
		image:'/images/icon/topmenu/chats.png',
		width:'auto',
		height:'auto',
		
	})
	
	tweetButton.add(tweetButtonIcon)
	
	var tweetButtonLabel =  Titanium.UI.createLabel({
		text : '\n\n内緒でつぶやく',
		color : 'black',
		bottom:height *0.02,
		textAlign:'center',
		font : {
			fontSize : 20
		}
	});
	
	tweetButton.add(tweetButtonLabel)
		
		
	tweetButton.addEventListener('click',function(e){
		 require('/ui/common/AddConfess').AddProject()
	})
		
		civ_window.add(tweetButton)
		
	var underRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:Titanium.UI.FILL,
			height:height *0.2,
			top:height *0.88
	})
	
		civ_window.add(underRibbon)
	
	var get_stamp_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/get_stamp/get_stamp_button.png',
		backgroundSelectedImage : '/images/button/get_stamp/get_stamp_button_pressed.png',
		width : width * 0.4,
		height : width * 0.2,
		center : {
			x : width * 0.25,
			y : height * 0.4
		}
	});

	get_stamp_button.addEventListener('click', function(e) {
		require('/ui/common/SelectBoard/selectItems').openView(civ_window);
	});

	//civ_window.add(get_stamp_button);

	var start_AddQuizButton = Titanium.UI.createButton({
		backgroundImage : '/images/button/AddCard/createCardButton.png',
		backgroundSelectedImage : '/images/button/AddCard/createCardButton_Pressed.png',
		width : width * 0.6,
		height : width * 0.3,
		center : {
			//x : width * 0.75,
			x : width * 0.5,
			y : height * 0.25
		}
	});

	start_AddQuizButton.addEventListener('click', function(e) {
		require('/ui/common/AddCardWindow/AddCardWindow').createCardWindow();

	});

	//civ_window.add(start_AddQuizButton);

	var get_tweet_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/get_flow_button/get_flow_button.png',
		backgroundSelectedImage : '/images/button/get_flow_button/get_flow_button_pressed.png',
		width : width * 0.6,
		height : width * 0.3,
		center : {
			//x : width * 0.75,
			x : width * 0.5,
			y : height * 0.45
		}
	});

	get_tweet_button.addEventListener('click', function(e) {
		require('/Confess/ConfessStarter_Newest').FlowdownloadStart();
	});

	//civ_window.add(get_tweet_button);

	var get_my_tweet_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/get_my_flow_button/get_flow_button.png',
		backgroundSelectedImage : '/images/button/get_my_flow_button/get_flow_button_pressed.png',
		width : width * 0.6,
		height : width * 0.3,
		center : {
			//x : width * 0.75,
			x : width * 0.5,
			y : height * 0.65
		}
	});

	get_my_tweet_button.addEventListener('click', function(e) {
		require('/Confess/getMyConfessData').getMyConfess();
	});

	//civ_window.add(get_my_tweet_button);

	var groupSearch_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/get_my_flow_button/get_flow_button.png',
		backgroundSelectedImage : '/images/button/get_my_flow_button/get_flow_button_pressed.png',
		width : width * 0.6,
		height : width * 0.3,
		center : {
			//x : width * 0.75,
			x : width * 0.5,
			y : height * 0.2
		}
	});

	groupSearch_button.addEventListener('click', function(e) {
		require('/Confess/getMyConfessData').getMyConfess();
	});

	//一旦画面からかくしておく
	groupSearch_button.setVisible(false);

	civ_window.add(groupSearch_button);

	//下のアンダーバーに関する処理
	var under_bar = require('/ui/common/underbar/underbar').createBar(civ_window)
	//civ_window.add(under_bar);

	//AddPointSystem
	var getPointButton = Titanium.UI.createImageView({
		backgroundImage : '/images/button/respoint/cupcell_button.png',
		/*
		top : height * 0.1,
		right : width * 0.05,
		*/
		width : width * 0.2,
		height : height * 0.1
	});
	sampleUIButton6.add(getPointButton)
	
	getPointButton.addEventListener('click', function(e) {
		if (!isTimeAlreadyPass()) {
			Titanium.UI.createNotification({
				duration : 3000,
				message : "新しいレスポイントは１日一回だけ獲得できます。"
			}).show();
			getPointButton.setImage(null);
			getPointButton.setImage('/images/button/respoint/cupcell_pressed.png');
			
			Titanium.App.fireEvent('modify_point',{delta:0});
			return;
		}
		//ゲットしたポイントを取得し零に戻す
		//イベント　got_finishが実行される
		require('/ACS/Confess/PointSystem/GetPoint_fromObject').getPoint();
		StartAnimation();

	});

	//under_bar.add(getPointButton);
	

	//ここでボタンの描写に関する処理を行う。
	civ_window.addEventListener('focus', function(e) {
		if (!isTimeAlreadyPass()) {
			getPointButton.setImage('/images/button/respoint/cupcell_pressed.png');
		} else {
			getPointButton.setImage('/images/button/respoint/cupcell_button.png');
		}
	})
	var cupcell_image = Titanium.UI.createImageView({
		image : '/images/civ/cupcell/cupcell.png',
		width : 'auto',
		height : 'auto',
		center : {
			x : width * 0.5,
			y : -1 * height
		}
	});

	civ_window.add(cupcell_image);

	//変更　アイテムに関するアニメーションを関数に変更
	//長すぎ　ワロリーヌ　
	function StartAnimation() {
		//カプセルのアニメーションに関する処理　とても長いのでいつかはオブジェクト化　＆Mycivilカラの分割を行う
		getPointButton.setTouchEnabled(false);
		cupcell_image.animate({
			center : {
				x : width * 0.5,
				y : height * 0.65
			},
			duration : 1500
		}, function(e) {
			//second animation
			cupcell_image.animate({
				center : {
					x : width * 0.5,
					y : height * 0.6
				},
				duration : 500
			}, function(e) {
				//third animation
				cupcell_image.setImage('/images/civ/cupcell/cupcell_open.png');
				food_arr.push(Ti.UI.createImageView({
					image : '/images/civ/cupcell/coin/coin1.png',
					width : 'auto',
					height : 'auto',
					center : {
						x : width * 0.5,
						y : height * 0.4
					}
				}));
				civ_window.add(food_arr[0]);

				var disappear_time = setTimeout(function(e) {
					//cupcell_image.setCenter({x:width * 0.5,y:-1 * height});
					cupcell_image.setImage('/images/civ/cupcell/cupcell.png');
					cupcell_image.animate({
						center : {
							x : width * 0.5,
							y : -1 * height
						},
						duration : 500
					})

					clearTimeout(disappear_time);

				}, 2000);

				var item_disappear_time = setTimeout(function(e) {
					//STUB的処理←　あとでちゃんと消しといてね
					civ_window.remove(food_arr[0]);
					clearTimeout(item_disappear_time);
					//delete food_arr[0];

					Titanium.UI.createNotification({
						duration : 3000,
						message : "レスポイントが追加されました！\n上のタブで確認ができます"
					}).show();
					getPointButton.setImage(null);
					getPointButton.setImage('/images/button/respoint/cupcell_pressed.png');

					getPointButton.setTouchEnabled(true);
					//ボタン確認処理時間を登録する
					Titanium.App.Properties.setDouble('lastTime', (new Date).getTime());
				}, 2500);
			})
		})
	}

	//ボードに関する設定　
	var board = require('/ui/common/CivBoard/Board').createBoard();

	civ_window.add(board);
	
	
	var upperRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:width,
			height:height *0.12,
			top:-0.03 * height
	})
	
		civ_window.add(upperRibbon)
	var upperRibbonLabel = Titanium.UI.createImageView({
			image:'/images/navibar/menu/menuLabel.png',
			
			width:width /2.5,
			height:height /15,
			center:{x:width * 0.52,y:height *0.05}
	})
	
		civ_window.add(upperRibbonLabel)

	//設定画面を表示する
	civ_window.activity.onCreateOptionsMenu = function(e) {
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

	return civ_window;
}
