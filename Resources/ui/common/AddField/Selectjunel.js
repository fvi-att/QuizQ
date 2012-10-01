/*
 * created by fvi@
 * 
 * created @ 2012 09 11
 * 
 */


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
			
			//ここにジャンル設定に関する内容を記述する
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
