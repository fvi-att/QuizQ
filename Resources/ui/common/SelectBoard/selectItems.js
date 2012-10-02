exports.openView = function(view) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var back_temp_view = Titanium.UI.createView({
		backgroundColor : 'black',
		width : Titanium.UI.FILL,
		height : Titanium.UI.FILL,
		opacity : 0.95
	});

	back_temp_view.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
	})

	view.add(back_temp_view);

	var old_paper = Titanium.UI.createView({
		backgroundImage : '/images/opening/old_paper.jpg',
		width : width * 0.8,
		height : height * 0.8,
		opaque : false,
		top : height * 0.1

	});

	//ここからhachi_927によるもの
	//アイテム画像読み込み
	item_image = new Array(5);
	item_image[0] = '/images/background/back_green.png';

	item_image[1] = '/images/background/back_lightblue.png';

	item_image[2] = '/images/background/back_white.png';

	item_image[3] = '/images/background/cork.jpg';

	item_image[4] = '/images/background/open_background.png';

	var selected_item_image = item_image[0];

	var item = Titanium.UI.createView({
		backgroundImage : selected_item_image,
		width : width * 0.75,
		height : height * 0.3,
		top : height * 0.07
	});

	old_paper.add(item);


	//説明部分の背景
	var item_explain_area = Titanium.UI.createView({
		backgroundImage : '/images/background/note.jpg',
		width : width * 0.75,
		height : height * 0.1,
		top : height * 0.39
	});

	old_paper.add(item_explain_area);

	//アイテムのリストを表示
	
	item_list_view = new Array(5);
	
	
	//アイテムのリストを画面下部に表示する関数の定義
	function itemList(i){
		item_list_view[0] = Titanium.UI.createView({
			backgroundImage : item_image[i],
			width : width * 0.15,
			height : height * 0.1,
			top : height * 0.5,
			left : width * 0.02
		});
		i=i+1;
		item_list_view[1] = Titanium.UI.createView({
			backgroundImage : item_image[i],
			width : width * 0.15,
			height : height * 0.1,
			top : height * 0.5,
			left : width * 0.2
		});
		i=i+1;
		item_list_view[2] = Titanium.UI.createView({
			backgroundImage : item_image[i],
			width : width * 0.15,
			height : height * 0.1,
			top : height * 0.5,
			left : width * 0.40
		});
		i=i+1;
		item_list_view[3] = Titanium.UI.createView({
			backgroundImage : item_image[i],
			width : width * 0.15,
			height : height * 0.1,
			top : height * 0.5,
			left : width * 0.60
		});

		for (j=0;j<=3;j++){
			old_paper.add(item_list_view[j]);
		};
	
	}
	
	itemList(0);	
	//ボタンの設置
	var left_button = Titanium.UI.createButton({
		backgroundImage : '/images/tmp/Left.png',
		width : width * 0.07,
		height : height * 0.05,
		top : height * 0.62,
		left : width * 0.55
	});
	left_button.addEventListener('click',function(e){
		alert('left');
	})
	
	var right_button = Titanium.UI.createButton({
		backgroundImage : '/images/tmp/right.png',
		width : width * 0.07,
		height : height * 0.05,
		top : height * 0.62,
		left : width * 0.65
	});
	right_button.addEventListener('click',function(e){
		alert('right');
	})
	old_paper.add(left_button);
	old_paper.add(right_button);

	//ここまでhachi_927によるもの

	var tmp_closeButton = Titanium.UI.createButton({
		backgroundImage : '/images/button/OK/trans/button.png',
		backgroundSelectedImage : '/images/button/OK/trans/button_pressed.png',
		height : height * 0.1,
		width : width * 0.5,
		top : height * 0.7
	});
	old_paper.add(tmp_closeButton);

	tmp_closeButton.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
		
		require('/DB/ItemDB').AddItems('テストアイテム','ldjghterihgosjd49036808sdf',require('/itemGood/json').toString({
			money:100,
			crops:150
		}));
		
		delete back_temp_view;
		delete old_paper;
		
	});

	old_paper.add(tmp_closeButton);

	var cancel_button = Titanium.UI.createButton({
		backgroundImage : '/images/cancel/cancel.png',
		width : width * 0.06,
		height : height * 0.05,
		center : {
			x : width * 0.75,
			y : height * 0.04
		}
	});

	cancel_button.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
	});

	old_paper.add(cancel_button);

	view.add(old_paper);

	return old_paper;
}