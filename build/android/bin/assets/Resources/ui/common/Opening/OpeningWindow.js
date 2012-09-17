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
	
	
	
	var win = Titanium.UI.createWindow({
		title : 'おーぷにんぐ',
		backgroundColor:'white',
		//backgroundImage : '/images/background/open_background.png',
		exitOnClose : false,
		fullscreen : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	var backgroundImage = Titanium.UI.createView({
		backgroundImage:'/images/background/open_background.png',
		width:Ti.UI.FILL,
		height:Ti.UI.FIll,
		opacity:0.7
	});
	
	win.add(backgroundImage);
	
	var old_paper = Titanium.UI.createImageView({
		image:'/images/opening/old_paper.jpg',
		width:width * 0.8,
		height:height * 0.8
		
	});
	win.add(old_paper);
	
	var label = Titanium.UI.createLabel({
		text:L('open_text'),
		textAlign:'left',
		width:width * 0.8,
		height:height * 0.8,
		color:'black',
		top:0,
		font:{fontSize:20}
	});
	
	win.add(label);
	
	var close_button = Titanium.UI.createButton({
		title:'スタート',
		top:height * 0.78,
		width:'auto',
		height:height * 0.1
	});
	
	
	close_button.addEventListener('click',function(e){
		win.close();
		
	});
	
	win.add(close_button);
	
	
	win.open();
		
	

}
