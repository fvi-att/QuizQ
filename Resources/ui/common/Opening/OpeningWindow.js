/*
 * this is Opening window
 *
 * created by fvi@
 *
 * created@2012 09 10
 *
 *
 */

exports.openWindow = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var scrollLabelpoint = 0;
	
	
	
	var win = require('/ui/common/CommonNavigationWindow').createCommonNavigationWindow()

	
	var old_paper = Titanium.UI.createView({
		backgroundImage:'/images/opening/old_paper.jpg',
		width:width * 0.8,
		height:height * 0.8
		
	});
	win.add(old_paper);
	var views_path =['/images/opening/images/movie1.png','/images/opening/images/movie3.png','/images/opening/images/movie2.png']
	var movie_view = Titanium.UI.createImageView({
		height:height * 0.4,
		width:width * 0.6,
		top:0,
		images:views_path,
		duration:2500,
		repeatCount:0
	});
	
	old_paper.add(movie_view);
	//win.add(movie_view)
	
	movie_view.start();
	

	var label = Titanium.UI.createLabel({
		text:L('open_text1'),
		textAlign:'center',
		width:width * 0.7,
		height:height * 0.35,
		color:'black',
		top:height *0.36,
		fontSize : height / 40,
		slide_num:1
	});
	
	win.add(label);
	
	var left_button = Titanium.UI.createButton({
		backgroundSelectedImage:'/images/opening/slide_button/left_button.png',
		backgroundImage:'/images/opening/slide_button/left_button_pressed.png',
		width:width * 0.1,
		height:height *0.1,
		left:0
	});
	left_button.addEventListener('click',function(e){
		changeText(-1);
	})
	//old_paper.add(left_button);
	win.add(left_button)
	
	
	var right_button = Titanium.UI.createButton({
		backgroundSelectedImage:'/images/opening/slide_button/right_button.png',
		backgroundImage:'/images/opening/slide_button/right_button_pressed.png',
		width:width * 0.1,
		height:height *0.1,
		right:0
	});
	right_button.addEventListener('click',function(e){
		changeText(1);
	})
	win.add(right_button);
	//old_paper.add(right_button)
	
	function changeText(delta){
		var after_num = label.slide_num + delta;
		//最大値　最小値
		if(after_num < 1 || after_num > 3 )
			return;

		label.setText(L('open_text'+after_num));
		
		label.slide_num = after_num;	
	}
	var close_button = new require('/ui/common/button/button')('start');
	
	close_button.setTop(height * 0.73);
	 /*Titanium.UI.createButton({
		title:'スタート',
		top:height * 0.78,
		width:'auto',
		height:height * 0.1
	});
	*/
	
	
	close_button.addEventListener('click',function(e){
		win.close();
		
		movie_view.stop();
		
		//メモリ解放
		/*
		delete movie_view;
		delete win;
		*/
	});
	
	win.add(close_button);
	
	
	win.open();
		
	

}
