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
	
	function isTimeAlreadyPass(){
		//getTimeはミリ秒で表示されているのでここでは一日を超えているかいなかを確認している
		if(Titanium.App.Properties.getDouble('lastTime') < new Date().getTime() - 1000 *60*60*24)
			return true;
		
		return false;
	}

	var civ_window = Titanium.UI.createWindow({
		backgroundImage : background_path,

		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var get_stamp_button = Titanium.UI.createButton({
		backgroundImage:'/images/button/get_stamp/get_stamp_button.png',
		backgroundSelectedImage:'/images/button/get_stamp/get_stamp_button_pressed.png',
		width : width * 0.4,
		height : width *0.2,
		center : {
			x : width * 0.25,
			y : height * 0.4
		}
	});

	get_stamp_button.addEventListener('click', function(e) {
		require('/ui/common/SelectBoard/selectItems').openView(civ_window);
	});

	//civ_window.add(get_stamp_button);
	
	var get_tweet_button = Titanium.UI.createButton({
		backgroundImage:'/images/button/get_flow_button/get_flow_button.png',
		backgroundSelectedImage:'/images/button/get_flow_button/get_flow_button_pressed.png',
		width : width * 0.6,
		height : width *0.3,
		center : {
			//x : width * 0.75,
			x : width *  0.5,
			y : height * 0.4
		}
	});

	get_tweet_button.addEventListener('click', function(e) {
		require('/Confess/ConfessStarter_Newest').FlowdownloadStart('5076f115b685534c140d38ac');
	});

	civ_window.add(get_tweet_button);
	
	
	var get_my_tweet_button = Titanium.UI.createButton({
		title:'自分のつぶやきを取得する',
		width : width * 0.6,
		height : width *0.3,
		center : {
			//x : width * 0.75,
			x : width *  0.5,
			y : height * 0.6
		}
	});

	get_my_tweet_button.addEventListener('click', function(e) {
		require('/Confess/getMyConfessData').getMyConfess();
	});

	civ_window.add(get_my_tweet_button);
	

	var man_image = Titanium.UI.createImageView({
		images : ['/images/civ/ancient/man/man0.png', '/images/civ/ancient/man/man10.png', '/images/civ/ancient/man/man11.png', '/images/civ/ancient/man/man12.png'],
		duration : 1500,
		repeatCount : 0,
		width : 'auto',
		height : 'auto',
		top : height * 0.5
	});
	man_image.start();

	man_image.addEventListener('click', function(e) {

		require('/ui/common/serifView/Serif').openView(civ_window);
		Titanium.App.Properties.setString('first_contact', 'second_contact')

	});

	civ_window.add(man_image);



	//下のアンダーバーに関する処理
	var under_bar = require('/ui/common/underbar/underbar').createBar(civ_window)
	civ_window.add(under_bar);
	


	//AddPointSystem
	var getCommentButton = Titanium.UI.createImageView({
		backgroundImage : '/images/button/respoint/cupcell_button.png',
		
		top : height *0.1,
		right : width *0.05,
		width : width * 0.2,
		height : height * 0.1
	});

	getCommentButton.addEventListener('click', function(e) {
		if (!isTimeAlreadyPass()) {
			Titanium.UI.createNotification({
				duration : 3000,
				message : "レスポイントは１日一回だけ収穫できるようです。"
			}).show();
			getCommentButton.setImage(null);
			getCommentButton.setImage('/images/button/respoint/cupcell_pressed.png');

			return;
		}
		//ゲットしたポイントを取得し零に戻す
		//イベント　got_finishが実行される
		require('/ACS/Confess/PointSystem/GetPoint_fromObject').getPoint();
		StartAnimation();

	});

	under_bar.add(getCommentButton);
	
	//ここでボタンの描写に関する処理を行う。
	civ_window.addEventListener('focus',function(e){
		if (!isTimeAlreadyPass()) {
			getCommentButton.setImage('/images/button/respoint/cupcell_pressed.png');
		}else{
			getCommentButton.setImage('/images/button/respoint/cupcell_button.png');
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
		getCommentButton.setTouchEnabled(false);
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
					getCommentButton.setImage(null);
					getCommentButton.setImage('/images/button/respoint/cupcell_pressed.png');

					getCommentButton.setTouchEnabled(true);
					//ボタン確認処理時間を登録する
					Titanium.App.Properties.setDouble('lastTime', (new Date).getTime());
				}, 2500);
			})
		})
	}

	//ボードに関する設定　
	var board = require('/ui/common/CivBoard/Board').createBoard();

	civ_window.add(board);
	
	

	return civ_window;
}
