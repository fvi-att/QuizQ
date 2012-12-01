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
	
	//
	//アイテム画像読み込み
	//
	var totalItemImage = 5;										//アイテム数を仮に定める
	item_image = new Array(totalItemImage);	
	item_image[0] = '/images/Stamp/kijyo.png';		//動作確認用画像読み込み
	item_image[1] = '/images/Stamp/kijyo.png';
	item_image[2] = '/images/Stamp/angry_cat.png';
	item_image[3] = '/images/Stamp/angry_cat.png';
	item_image[4] = '/images/Stamp/kijyo.png';
	
	itemText = new Array(totalItemImage);
	itemText[0] = '猫のスタンプ1'										//動作確認用テキスト
	itemText[1] = '猫のスタンプ2'
	itemText[2] = '猫のスタンプ3'
	itemText[3] = '猫のスタンプ4'
	itemText[4] = '猫のスタンプ5'

	var selectedItem = 0;										//選択されたアイテム番号を格納する変数　初期設定を0とする
	
	
	//選択されたアイテム画像、説明部分の表示
	var item = Titanium.UI.createView({
		backgroundImage : item_image[selectedItem],
		width : width * 0.75,
		height : height * 0.3,
		top : height * 0.07
	});

	old_paper.add(item);
	
	var itemExplain = Titanium.UI.createTextArea({
		backgroundImage : '/images/background/note.jpg',
		width : width * 0.75,
		height : height * 0.1,
		top : height * 0.39
	});
	
	old_paper.add(itemExplain);	
	//
	//アイテムのリストを表示
	//
	//ItemList関数に必要な変数の定義
	itemNumber = 0;
	leftItem = 0;									//アイテムリストの左端のアイテムの番号を記憶する変数(「消えたアイテム」っぽいから名前を変えたい)
	visibleItems = 4;
	item_list_view = new Array(totalItemImage);
	itemWidth = 0.7/(visibleItems);
	itemSpace = 0.1/(visibleItems*2);
	
	//アイテムのリストを画面下部に表示
	
	for(i=0;i<totalItemImage;i++){
		item_list_view[i] = Titanium.UI.createView({
			backgroundImage : item_image[i],
			width : width * 0.15,
			height : height * 0.1,
			top : height * 0.5,
			left : width * (itemSpace*(2*i+1)+itemWidth*i)
		});
	}
	
	
	item_list_view[0].addEventListener('click',function(e){
		item.setBackgroundImage(item_image[0]);
		itemExplain.setValue(itemText[0]);
	})
	item_list_view[1].addEventListener('click',function(e){
		item.setBackgroundImage(item_image[1]);
		itemExplain.setValue(itemText[1]);
	})
	item_list_view[2].addEventListener('click',function(e){
		item.setBackgroundImage(item_image[2]);
		itemExplain.setValue(itemText[2]);
	})
	item_list_view[3].addEventListener('click',function(e){
		item.setBackgroundImage(item_image[3]);
		itemExplain.setValue(itemText[3]);
	})
	item_list_view[4].addEventListener('click',function(e){
		item.setBackgroundImage(item_image[4]);
		itemExplain.setValue(itemText[4]);
	})
	
	
	//以下、上記の文をforで書こうとして失敗した残骸(サムネを押して出てくるのが(totalItemImage)番目の画像　functionの中身で上手くカウンタの数が反映されてない?)
	//whileで書いても同様の現象が起こった
	/*
	for(cnt=0;cnt<totalItemImage;cnt++){
		item_list_view[cnt].addEventListener('click',function(e){
			item.setBackgroundImage(item_image[cnt]);
			itemExplain.setValue(itemText[cnt]);
		})
	}
	*/
	
	//再帰関数を使って書こうとしたけどやっぱり駄目(0番目の画像にしか反映されない→多分、再帰してない)
	/*
	function SetMotion(cnt){
		if(cnt<totalItemImage){
			item_list_view[cnt].addEventListener('click',function(e){
				item.setBackgroundImage(item_image[cnt]);
				itemExplain.setValue(itemText[cnt]);
			})
			arguments.callee(cnt+1);
		}
	}
	
	SetMotion(0);
	*/
	
	
	for(i=0;i<totalItemImage;i++){
		old_paper.add(item_list_view[i]);
	}
	//
	//左右ボタンの設置
	//
	
	var left_button = Titanium.UI.createButton({
		backgroundImage : '/images/tmp/Left.png',
		width : width * 0.07,
		height : height * 0.05,
		top : height * 0.62,
		left : width * 0.55
	});
	
	left_button.addEventListener('click',function(e){
		leftItem = leftItem - 1;
		if(leftItem<0){
			leftItem = totalItemImage + leftItem
			}
			
		for(i=0;i<totalItemImage;i++){
			j = leftItem + i;
			k = j;
			if(j>=totalItemImage){
				k = j - totalItemImage;
			}
			item_list_view[i].updateLayout({
				left : width * (itemSpace*(2*k+1)+itemWidth*k)
			});
		}
	})
	
	var right_button = Titanium.UI.createButton({
		backgroundImage : '/images/tmp/right.png',
		width : width * 0.07,
		height : height * 0.05,
		top : height * 0.62,
		left : width * 0.65
	});
	right_button.addEventListener('click',function(e){
		leftItem = leftItem + 1;
		if(leftItem>totalItemImage){
			leftItem =  leftItem - totalItemImage
			}
		for(i=0;i<totalItemImage;i++){
			j = leftItem + i;
			k = j;
			if(j>=totalItemImage){
				k = j - totalItemImage;
			}
			item_list_view[i].updateLayout({
				left : width * (itemSpace*(2*k+1)+itemWidth*k)
			});
		}
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
		
		delete item_list_view;
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