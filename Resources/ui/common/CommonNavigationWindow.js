/*
 * created by fvi@
 * 
 * created @ 201303010936
 * 
 * 
 * 
 * 
 */

exports.createCommonNavigationWindow = function(){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(255,235,205)',
		exitOnClose : false,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	
	var underRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:Titanium.UI.FILL,
			height:height *0.2,
			top:height *0.88
	})
	
		base_window.add(underRibbon)
		
	var upperRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:Titanium.UI.FILL,
			height:height *0.12,
			top:-0.03 * height
	})
	
		base_window.add(upperRibbon)
		
	base_window.upperRibbon = upperRibbon;
	base_window.underRibbon = underRibbon;
	
	return base_window
}
