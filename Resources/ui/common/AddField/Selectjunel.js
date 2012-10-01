/*
 * created by fvi@
 *
 * created @ 2012 09 11
 *
 */

exports.openView = function(view) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var back_temp_view = Titanium.UI.createView({
		backgroundColor : 'black',
		width : Titanium.UI.FILL,
		height : Titanium.UI.FILL,
		opacity : 0.95
	});

	back_temp_view.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
	})

	view.add(back_temp_view);

	var old_paper = Titanium.UI.createView({
		backgroundImage : '/images/opening/old_paper.jpg',
		width : width * 0.8,
		height : height * 0.8,
		opaque : false,
		top : height * 0.1

	});

	var tmp_closeButton = Titanium.UI.createButton({
		backgroundImage : '/images/button/OK/trans/button.png',
		backgroundSelectedImage : '/images/button/OK/trans/button_pressed.png',
		height : height * 0.1,
		width : width * 0.5,
		top : height * 0.7
	});
	old_paper.add(tmp_closeButton);

	tmp_closeButton.addEventListener('click', function(e) {
		/*
		view.remove(back_temp_view);
		view.remove(old_paper);
		*/
		//ここにジャンル設定に関する内容を記述する 　アニメーションに関する処理を書き加える
		    var t = Ti.UI.create2DMatrix();
   			　　　 t = t.scale(0.5);
   			
   			    var animation = Titanium.UI.createAnimation({
   			    	transform:t,
   			    	duration:500,
   			    	top:height *0.1,
   			    	width:old_paper.width * 0.25,
   			    	autoreverse:false
   			    });					
   				picker1.animate(animation);
   				

			
	});

	old_paper.add(tmp_closeButton);

	var cancel_button = Titanium.UI.createButton({
		backgroundImage : '/images/cancel/cancel.png',
		width : width * 0.06,
		height : height * 0.05,
		center : {
			x : width * 0.75,
			y : height * 0.04
		}
	});

	cancel_button.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
		
		delete old_paper;
		delete back_temp_view;
	});

	old_paper.add(cancel_button);
	//ピッカーに関する処理
	var names = ['Joanie', 'Mickey', 'Jean-Pierre', 'Gustav', 'Raul', 'Mimi', 'Emily', 'Sandra', 'Carrie', 'Chachi'];
	var verbs = ['loves', 'likes', 'visits', 'loathes', 'waves to', 'babysits', 'accompanies', 'teaches', 'announces', 'supports', 'knows', 'high-fives'];

	var rows1 = [];
	for (var i = 0; i < names.length; i++) {
		rows1.push(Ti.UI.createPickerRow({
			title : names[i]
		}));
	}

	var rows2 = [];
	for ( i = 0; i < verbs.length; i++) {
		rows2.push(Ti.UI.createPickerRow({
			title : verbs[i]
		}));
	}

	var rows3 = [];
	for ( i = (names.length - 1); i >= 0; i--) {
		rows3.push(Ti.UI.createPickerRow({
			title : names[i]
		}));
	}

	var column1 = Ti.UI.createPickerColumn({
		rows : rows1,
		font : {
			fontSize : "24"
		}
	});
	var column2 = Ti.UI.createPickerColumn({
		rows : rows2,
		font : {
			fontSize : "24"
		}
	});

	var picker1 = Ti.UI.createPicker({
		useSpinner : true,
		visibleItems : 7,
		type : Ti.UI.PICKER_TYPE_PLAIN,
		height : height * 0.4,
		width:old_paper.width * 0.9,
		columns : [column1, column2]
	});

	old_paper.add(picker1);

	view.add(old_paper);

	return old_paper;
}
