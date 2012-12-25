/*
 * optbar.js
 * 
 * created by fvi@
 * created @ 20121224
 * 
 * 
 * 
 */

exports.createCommonOptBar = function(){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	
	var com_view = Titanium.UI.createView({
				backgroundImage : '/images/optbar/opt_bar.png',
		height : height * 0.75,
		width  : width * 0.5,
		center : {
			x : width *  0.7,
			y : height * 0.5
		},
		isAppear : false
	});
	
	var move_button = Titanium.UI.createButton({
		title:'move',
		height:height * 0.2,
		width:width*0.1,
		center:{x:width * 0.05,y:height * 0.15}
		
	});
	move_button.addEventListener('click',function(e){
		alert("get move");
	})
	
	com_view.add(move_button);
	
	
	
	
	
	
	return com_view;
	
}
