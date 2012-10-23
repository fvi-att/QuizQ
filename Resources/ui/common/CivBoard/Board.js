/*
 * created by fvi@
 *
 * created @ 2012 09 11
 * 
 * recreated @ 2012 10 22
 *
 */

exports.createBoard = function() {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var point_num = Titanium.UI.createLabel({
		color : 'black',
		text : 'ひみつぶやきポイント\n０ポイント',
		backgroundImage : '/images/transparent.png',
		width : width * 0.5,
		font:{fontSize:15},
		height : height * 0.15,
		textAlign : 'center',
	});

	
	var board = Titanium.UI.createView({
		backgroundImage : '/images/board/board.png',
		width : width,
		height : height * 0.25,
		center : {
			x : width * 0.5,
			y : -0.08 * height
		},
		isAppear : false,


	});

	board.add(point_num);

	

	board.addEventListener('touchstart', function(e) {
		var move = height * -0.09;
		if (!board.isAppear) {
			move = height * 0.15;
			board.isAppear = true;
		} else {
			board.isAppear = false;
		}

		board.animate({
			center : {
				x : width * 0.5,
				y : move
			},
			duration : 400
		});

	});

	return board;
}
