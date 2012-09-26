/*
 * @ creator fvi@
 * created@  2012 07 20
 * 
 */

function createButton(text){
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var button_height = height/7.5;
	var button_width  = width  *0.75;

	var image_path;
	
	switch(text){
		case 'add':
			image_path = '/images/button/add/';
			break;
		
		case 'tweet':
<<<<<<< HEAD
			image_path ='/images/button/tweet/';
			break;
		
		case 'ok':
			image_path ='/images/button/OK/';
			break;
		
		case 'ok_new':
			image_path = '/images/button/OK/trans/';
=======
			image_path ='/images/button/tweet/'
			break;
		
		case 'ok':
			image_path ='/images/button/OK/'
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
			break;
		
		case 'share':
			image_path ='/images/button/share/';
			break;
		
		case 'later':
			image_path ='/images/button/later/';
			break;
			
		
		default:
			image_path = '/images/button/add/';
	}
	var button = Titanium.UI.createButton({
		backgroundImage:image_path + 'button.png',
		backgroundSelectedImage:image_path + 'button_pressed.png',
		height:button_height,
		width:button_width
	});
	

	if(text){
		var label = Titanium.UI.createLabel({
			text:text,
			color:'black',
			font:{fontSize:20},
			width:button_width   * 0.9,
			height:button_height * 0.6,
			center:{x:button_width *0.5,y:button_height *0.5}
			
			
		});
		
		button.add(label);
		
	}
	
	return button;
}

module.exports = createButton;
