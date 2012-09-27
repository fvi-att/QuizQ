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
		fullscreen : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	
	var house_image = Titanium.UI.createImageView({
		image : '/images/civ/ancient/house/house1.png',
		width : 'auto',
		height : 'auto',
		center : {
			x : width * 0.3,
			y : height * 0.4
		}
	});
	

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
		Titanium.App.Properties.setString('first_contact', 'need_apple')

	});

	civ_window.add(man_image);

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

	var item_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/give/give.png',
		height : height * 0.1,
		width : width * 0.3,
		center : {
			x : width * 0.7,
			y : height * 0.9
		}
	});

	civ_window.add(item_button);

	item_button.addEventListener('click', function(e) {
		var item_view = require('/ui/common/SelectBoard/selectItems').openView(civ_window);
		item_button.setTouchEnabled(false);
		//StartAnimation(); このメソッドでアニメーションを開始するよ
		
	});

	//変更　アイテムに関するアニメーションを関数に変更
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
					//STUB的処理
					civ_window.remove(food_arr[0]);
					clearTimeout(item_disappear_time);
				}, 2500);
			})
		})
	}

	var invest_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/invest/investment.png',
		height : height * 0.1,
		width : width * 0.3,

		center : {
			x : width * 0.3,
			y : height * 0.9
		}

	});

	invest_button.addEventListener('click', function(e) {
		//背景黒のビューを設定
		var invest_view = require('/ui/common/SelectBoard/SelectBoard').openView(civ_window);
		var invest_label = Titanium.UI.createLabel({
			text : '今現時点のあなたの文明は\n人類の夜明け\nの段階です',
			textAlign : 'center',
			color : 'black',
			width : invest_view.width * 0.9,
			height : invest_view.height * 0.7
		});
		invest_view.add(invest_label);

	});

	civ_window.add(invest_button);

	//ボードに関する設定
	var board = require('/ui/common/CivBoard/Board').createBoard();

	civ_window.add(board);

	return civ_window;
}
