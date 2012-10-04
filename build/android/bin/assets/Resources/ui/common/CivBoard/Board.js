/*
 * created by fvi@
 *
 * created @ 2012 09 11
 *
 */

exports.createBoard = function() {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var people_num = Titanium.UI.createLabel({
		color : 'black',
		text : '人口:10人',
		backgroundImage : '/images/transparent.png',
		width : width * 0.5,
		height : height * 0.1,
		textAlign : 'left',
		top : 0,
		left : width * 0.05
	});

	var status_label = Titanium.UI.createLabel({
		color : 'black',
		text : '文明：人類の夜明け',
		backgroundImage : '/images/transparent.png',
		width : width * 0.5,
		height : height * 0.1,
		textAlign : 'left',
		top : height * 0.08,
		left : width * 0.05
	});
	
	var caltural_label = Titanium.UI.createLabel({
		color : 'black',
		text : '文化値:2/10(20%)',
		backgroundImage : '/images/transparent.png',
		width : width * 0.5,
		height : height * 0.1,
		textAlign : 'left',
		top : 0,
		left : width *0.6
	});
	
	var money_label = Titanium.UI.createLabel({
		color : 'black',
		text : '財政:5P',
		backgroundImage : '/images/transparent.png',
		width : width * 0.5,
		height : height * 0.1,
		textAlign : 'left',
		top : height * 0.08,
		left : width *0.6
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

		people_num : people_num,
		status_label:status_label,
		caltural_label:caltural_label,
		money_label:money_label
	});

	board.add(people_num);
	board.add(status_label);
	board.add(caltural_label);
	board.add(money_label);
	

	board.addEventListener('touchstart', function(e) {
<<<<<<< HEAD
		var move = height * -0.08;
=======
		var move = height * -0.09;
>>>>>>> a3a88f364ef27ede0c22f6c3a54fb24f724b746f
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
