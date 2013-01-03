/*
 *
 *
 *
 *
 */

exports.createCard = function(card_type) {
	var backgroundImagePath = '/images/navibar/flow_under.png';
	
	if(card_type == 'blue')
		backgroundImagePath = '/images/navibar/flow_under_blue.png';
		
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var cardView = Titanium.UI.createView({
		backgroundImage : backgroundImagePath,
		width : width * 0.85,
		height : height * 0.4,
	});

	var card1Text = Titanium.UI.createTextArea({
		hintText : 'あなたの秘密のつぶやきをどうぞ\n(200字以内)',
		textAlign : 'center',
		width : cardView.getWidth() * 0.9,
		height : cardView.getHeight() * 0.9,
		center:{x:cardView.getWidth() *0.5,y:cardView.getHeight()*0.5}
	});
	
	cardView.text = card1Text.value;
	
	cardView.add(card1Text);

	
	return cardView;
}