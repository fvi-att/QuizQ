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
	var point = Titanium.App.Properties.getInt('point');
	
	
	var point_num = Titanium.UI.createLabel({
		color : 'black',
		text : 'ひみつぶやきポイント\n'+point+'ポイント',
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
			y : -0.15 * height
		},
		isAppear : false,


	});

	board.add(point_num);

	function MoveBoard(){
		var move = height * -0.15;
		if (!board.isAppear) {
			move = height * 0.215;
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
	}
	function setMovement(set){
		if(board.isAppear == set)
			return;
		MoveBoard();
	}
	board.addEventListener('touchstart', function(e) {
		MoveBoard();
	});
	
	Titanium.App.addEventListener('modify_point',function(e){
		//更新済みの状態のプロパティ値
		var rst = Titanium.App.Properties.getInt('point');
		setMovement(true);
		//これで表示状態にする。
		var delta = e.delta;
		if(delta == null)
			delta = 0;
			
		var plus_minus ='';
		
		if(delta >0)
			plus_minus = '+';
		
		point_num.setText('ひみつぶやきポイント\n'+rst+'ポイント'+'('+plus_minus+delta+')');
	});

	return board;
}
