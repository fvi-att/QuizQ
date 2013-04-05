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

	var base_window = require('/ui/common/CommonNavigationWindow').createCommonNavigationWindow()/*
		//backgroundImage : background_path,
		backgroundColor : 'rgb(255,235,205)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});*/
	
//グリッドメニューボタン　作成
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
		
	
	var eventBatchImage = Titanium.UI.createImageView({
		width:'auto',
		height:'auto',
		image:'/images/eventBatch/eventBatch.png',
		top:base_button.getHeight() * 0.1,
		right:base_button.getWidth() *0.1,
		visible:false
	})
	
		base_button.batch = eventBatchImage
		base_button.add(eventBatchImage)
		
		
		
	base_window.add(base_button)
	return base_button;
	

		
	}
//ボタン作成メソッド終了
	
	
	var delta_buttonLayout = height/10//height /10
	
	var menuGridButton1 = createButton()
	//menuGridButton1.setTitle('ヘルプ')
	menuGridButton1.setTop(delta_buttonLayout +1)
	menuGridButton1.setLeft(0);
	menuGridButton1.label.setText('ヘルプ')
	menuGridButton1.icon.setImage('/images/icon/topmenu/help.png')
	
	menuGridButton1.batch.setVisible(Titanium.App.Properties.getBool('event_batch1'))
	
	menuGridButton1.addEventListener('click',function(e){
		require('/ui/common/Help/helpWin').openWin()
		
		Titanium.App.Properties.setBool('event_batch1',false)
		menuGridButton1.batch.setVisible(false)
	})

	var menuGridButton2 = createButton()
	menuGridButton2.setTop(delta_buttonLayout +1)
	menuGridButton2.setLeft(width / 3)
	//menuGridButton2.setTitle('コツをつぶやく')
	menuGridButton2.label.setText('コツをつぶやく')
	menuGridButton2.icon.setImage('/images/icon/topmenu/card.png')
	
	menuGridButton2.batch.setVisible(Titanium.App.Properties.getBool('event_batch2'))
	
	
	menuGridButton2.addEventListener('click', function(e) {
		require('/ui/common/AddCardWindow/AddCardWindow').createCardWindow();
		
		Titanium.App.Properties.setBool('event_batch2',false)
		menuGridButton2.batch.setVisible(false)
	})

	var menuGridButton3 = createButton()
	menuGridButton3.setTop(delta_buttonLayout +1)
	menuGridButton3.setLeft(width *2 /3)
	//menuGridButton3.setTitle('どうやって\n遊ぶの？')
	menuGridButton3.label.setText('お知らせ')
	menuGridButton3.icon.setImage('/images/icon/topmenu/broadcast.png')
	
	menuGridButton3.batch.setVisible(Titanium.App.Properties.getBool('event_batch3'))
	
	
	menuGridButton3.addEventListener('click',function(e){
		require('/ui/common/Help/helpWin').openWin('http://xicolo.com/wordpress/?page_id=347')
		
		Titanium.App.Properties.setBool('event_batch3',false)
		menuGridButton3.batch.setVisible(false)
	})
	
	var menuGridButton4 = createButton()
	menuGridButton4.setTop(height /5 + delta_buttonLayout +1)
	menuGridButton4.setLeft(0)
	//menuGridButton4.setTitle('設定')
	menuGridButton4.label.setText('設定')
	menuGridButton4.icon.setImage('/images/icon/topmenu/setting.png')
	
	menuGridButton4.batch.setVisible(Titanium.App.Properties.getBool('event_batch4'))
	
	menuGridButton4.addEventListener('click',function(e){
		require('/ui/common/ConfessWindow/ConfigWin').OpenConfigWin()
		
		Titanium.App.Properties.setBool('event_batch4',false)
		menuGridButton4.batch.setVisible(false)
	})
	
	var menuGridButton5 = createButton()
	menuGridButton5.setTop(height /5 + delta_buttonLayout +1)
	menuGridButton5.setLeft(width /3)
	//menuGridButton5.setTitle('みんなの\nつぶやき')
	menuGridButton5.label.setText('みんなの\nひみつぶやき')
	menuGridButton5.icon.setImage('/images/icon/topmenu/everybody2.png')
	
	menuGridButton5.batch.setVisible(Titanium.App.Properties.getBool('event_batch5'))
	
	
	menuGridButton5.addEventListener('click',function(e){
		require('/Confess/ConfessStarter_Newest').FlowdownloadStart();
		
		Titanium.App.Properties.setBool('event_batch6',false)
		menuGridButton5.batch.setVisible(false)
	})
	
	var menuGridButton6 = createButton()
	menuGridButton6.setTop(height /5 + delta_buttonLayout +1)
	menuGridButton6.setLeft(width *2/3)
	//menuGridButton6.setTitle('ポイント確認')
	menuGridButton6.label.setText('ポイント確認')
	
	menuGridButton6.batch.setVisible(Titanium.App.Properties.getBool('event_batch6'))
	
	menuGridButton6.addEventListener('click',function(e){
		Titanium.App.Properties.setBool('event_batch6',false)
		menuGridButton6.batch.setVisible(false)
	})
	
	var menuGridButton7 = createButton()
	menuGridButton7.setTop(height *2/5 + delta_buttonLayout)
	menuGridButton7.setLeft(0)
	menuGridButton7.label.setText('名無しさん\nプロフィール')
	menuGridButton7.icon.setImage('/images/icon/topmenu/profile.png')
	
	menuGridButton7.batch.setVisible(Titanium.App.Properties.getBool('event_batch7'))
	
	menuGridButton7.addEventListener('click',function(e){
		require('/ui/common/ProfileWindow/ProfileWindow').OpenProfileWindow()
		
		Titanium.App.Properties.setBool('event_batch7',false)
		menuGridButton7.batch.setVisible(false)
	})
	var menuGridButton8 = createButton()
	menuGridButton8.setTop(height *2/5 + delta_buttonLayout)
	menuGridButton8.setLeft(width /3)
	menuGridButton8.label.setText('マイ\nひみつぶやき')
	menuGridButton8.icon.setImage('/images/icon/topmenu/mytweet.png')
	
	menuGridButton8.batch.setVisible(Titanium.App.Properties.getBool('event_batch8'))
	
	
	menuGridButton8.addEventListener('click',function(e){
		require('/Confess/getMyConfessData').getMyConfess();
		
		Titanium.App.Properties.setBool('event_batch8',false)
		menuGridButton8.batch.setVisible(false)
	});
	
	var menuGridButton9 = createButton()
	menuGridButton9.setTop(height *2/5 + delta_buttonLayout)
	menuGridButton9.setLeft(width *2/3)
	menuGridButton9.label.setText('工事中')
	menuGridButton9.icon.setImage('/images/icon/topmenu/construction.png')
	
	menuGridButton9.batch.setVisible(Titanium.App.Properties.getBool('event_batch9'))
	
	menuGridButton9.addEventListener('click',function(e){
		Titanium.App.Properties.setBool('event_batch9',false)
		menuGridButton9.batch.setVisible(false)
		
	});
	
	var tweetButton = Titanium.UI.createView({
			width:Titanium.UI.FILL,
			height : height - (menuGridButton9.getTop() + height/5 + delta_buttonLayout),
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
		
		base_window.add(tweetButton)

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
		require('/ui/common/SelectBoard/selectItems').openView(base_window);
	});

	//base_window.add(get_stamp_button);

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

	//base_window.add(start_AddQuizButton);

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

	//base_window.add(get_tweet_button);

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

	//base_window.add(get_my_tweet_button);

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

	base_window.add(groupSearch_button);

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
	menuGridButton6.add(getPointButton)
	
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
	base_window.addEventListener('focus', function(e) {
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

	base_window.add(cupcell_image);

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
				base_window.add(food_arr[0]);

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
					base_window.remove(food_arr[0]);
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



	var upperRibbonLabel = Titanium.UI.createImageView({
			image:'/images/navibar/menu/menuLabel.png',
			
			width:width /2.5,
			height:height /15,
			center:{x:width * 0.52,y:height *0.05}
	})
	
		base_window.add(upperRibbonLabel)
		
	
	
		//ポイントボードに関する設定　
	var board = require('/ui/common/CivBoard/Board').createBoard();

	base_window.add(board);
	
	

	//設定画面を表示する
	base_window.activity.onCreateOptionsMenu = function(e) {
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

	return base_window;
}
