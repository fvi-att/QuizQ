/**
 * @author fvi
 * 
 * created @ 2012 09 12
 * 
 */
exports.openView = function(view){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
		var helloView = Titanium.UI.createView({
			backgroundImage:'/images/serif/serif.png',
			top:height * 1.2,
			width:width,
			height:'auto'
		});
		
		var serif_label = Titanium.UI.createLabel({
			text:L(require('/Serif/Serif').getSerif(Titanium.App.Properties.getString('prmt_talk'))),
			backgroundImage:'/images/transparent.png',
			color:'#191970',
			top:0,
			width: width * 0.8,
			height: height *0.35
			
		});
		
		helloView.add(serif_label);
		
		var cancel_button = Titanium.UI.createButton({
			backgroundImage:'/images/cancel/cancel.png',
			width:width * 0.06,
			height:height*0.05,
			center:{x:width * 0.93,y:height *0.06}
		});
		
		cancel_button.addEventListener('click',function(e){
			view.remove(helloView);
			helloView = null;		
		});
		
		helloView.add(cancel_button);
		
		
		view.add(helloView);
		
		helloView.addEventListener('click',function(e){
			view.remove(helloView);
			delete helloView;  
		});
		
		helloView.animate({top:height * 0.55,duration:500},function(e){
			//第二アニメーション
			helloView.animate({top:height *0.6,duration:600});
		})
}
