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

	var civ_window = Titanium.UI.createWindow({
		backgroundImage : background_path,



		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var house_image = Titanium.UI.createImageView({
		image : '/images/civ/ancient/house/house1.png',
		width : width * 0.4,
		height : 'auto',
		center : {
			x : width * 0.3,
			y : height * 0.4
		}
	});

	house_image.addEventListener('click', function(e) {
		//require('/ui/common/SelectBoard/CivGrowthBoard').openView(civ_window);
	})

	civ_window.add(house_image);

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

	var flowWindowButton = Titanium.UI.createButton({
		backgroundImage:'/images/flowboard/board.png',
		top : height * 0.6,
		left:width * 0.7,
		width : width *0.3,
		height : height *0.2
	});
	
	flowWindowButton.addEventListener('click',function(e){
		require('/Confess/ConfessStarter_Newest').FlowdownloadStart('5076f115b685534c140d38ac')
	});
	
	civ_window.add(flowWindowButton);
	
	function Merge_Point(point){
		
		var rst = Titanium.App.Properties.getInt('point');
		rst += point;
		
		Titanium.App.Properties.setInt('point', rst);
				//初期化を行う。
		require('/ACS/Confess/UserPointKVS').setPointKVS(Titanium.App.Properties.getString('username'),0);
		
		Titanium.App.fireEvent('modify_point');
		
	}
	
	//AddPointSystem
	var getCommentButton = Titanium.UI.createButton({
		title:'反応数',
		top : height * 0.3,
		right:0,
		width : width *0.3,
		height : height *0.2
	});
	
	getCommentButton.addEventListener('click',function(e){
		//Titanium.App.Properties.getString('username')
		//ゲットしたポイントを取得し零に戻す
		//イベント　got_finishが実行される
		require('/ACS/Confess/UserPointKVS').getPointKVS(Titanium.App.Properties.getString('username'),'my_civ');
		
		
	});
	civ_window.add(getCommentButton);
	
	Titanium.App.addEventListener('finish_getPoint',function(e){
		if(!e.command == 'my_civ')
			return;
		
		//alert('Success:\\n' + 'name: ' + e.keyvalue.name + '\\n' + 'value: ' + e.keyvalue.value);
		getCommentButton.setTitle('レス数：'+e.keyvalue.value);
		
		Merge_Point(Number(e.keyvalue.value));
		
		
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
					image : '/images/civ/food/apple.png',
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
					item_button.setTouchEnabled(true);

					clearTimeout(disappear_time);

				}, 2000);

				var item_disappear_time = setTimeout(function(e) {
					//STUB的処理←　あとでちゃんと消しといてね
					civ_window.remove(food_arr[0]);
					clearTimeout(item_disappear_time);
				}, 2500);
			})
		})
	}

	var under_bar = require('/ui/common/underbar/underbar').createBar(civ_window)
	civ_window.add(under_bar);

	//ボードに関する設定　
	var board = require('/ui/common/CivBoard/Board').createBoard();

	civ_window.add(board);

	return civ_window;
}
