exports.openView = function(view){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
		var back_temp_view = Titanium.UI.createView({
			backgroundColor:'black',
			width:Titanium.UI.FILL,
			height:Titanium.UI.FILL,
			opacity:0.95
		});
		
		back_temp_view.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);
		})
		
		view.add(back_temp_view);
		
		var old_paper = Titanium.UI.createView({
			backgroundImage:'/images/opening/old_paper.jpg',
			width:width * 0.8,
			height:height * 0.8,
			opaque:false,
			top:height * 0.1
		
		});
		
		//ここからhachi_927によるもの
		//アイテム画像読み込み
		var item_image = [];
		var item_image0 = '/images/background/back_green.png';
		
		var item_image1 = '/images/background/back_lightblue.png';
		
		var item_image2 = '/images/background/back_white.png';
		
		var item_image3 = '/images/background/cork.png';
		
		var item_image4 = '/images/background/open_background.png';
		
		var item = Titanium.UI.createView({
			backgroundImage:item_image0,
			width:width * 0.6,
			height:height * 0.3,
			top:height * 0.15
		});
		
		
		view.add(item);
		
		//
		var item_explain_area = Ti.UI.createview({
			backgroundImage:'/images/background/note.png',
			width:width * 0.6,
			height:height * 0.15,
			top:height *0.45
		});
		
		//ここまでhachi_927によるもの
		
		
		var tmp_closeButton = Titanium.UI.createButton({
			backgroundImage:'/images/button/OK/trans/button.png',
			backgroundSelectedImage:'/images/button/OK/trans/button_pressed.png',
			height:height* 0.1,
			width:width * 0.5,
			top:height * 0.7
		});
		old_paper.add(tmp_closeButton);
		
		tmp_closeButton.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);
		});
		
		old_paper.add(tmp_closeButton);
		
		var cancel_button = Titanium.UI.createButton({
			backgroundImage:'/images/cancel/cancel.png',
			width:width * 0.06,
			height:height*0.05,
			center:{x:width * 0.75,y:height *0.04}
		});
		
		cancel_button.addEventListener('click',function(e){
			view.remove(back_temp_view);
			view.remove(old_paper);			
		});
		
		old_paper.add(cancel_button);
		
		
		
		
		
		view.add(old_paper);
		
		return old_paper;
}
