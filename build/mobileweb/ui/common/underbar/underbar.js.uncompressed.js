/**
 * @author fvi
 * created @ 2012 09 10
 */
exports.createBar = function(fromView) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var under_bar = Titanium.UI.createView({
		backgroundImage : '/images/civ/bar/underbar1.png',
		width : width,
		height : height * 0.6,
		center : {
			x : width * 0.5,
			y : height * 1.05
		},
		isAppear : false
	});

	var move_button = Titanium.UI.createButton({
		backgroundImage : '/images/transparent.png',
		width : width * 0.3,
		height : height * 0.1,
		top : 0,
		left : width * 0.02
	});
	move_button.addEventListener('click', function(e) {
		var move = height * 1.05;
		if (!under_bar.isAppear) {
			move = height * 0.75;
			under_bar.isAppear = true;
		} else {
			under_bar.isAppear = false;
		}

		under_bar.animate({
			center : {
				x : width * 0.5,
				y : move
			},
			duration : 350
		});

	});

	var item_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/give/give.png',
		height : height * 0.12,
		width : width * 0.4,
		center : {
			x : width * 0.3,
			y : height * 0.35
		}
	});


	item_button.addEventListener('click', function(e) {
		var item_view = require('/ui/common/SelectBoard/selectItems').openView(fromView);

	});

	var addConfess_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/secret_tweet/tweet1.png',
		height : height * 0.12,
		width : width * 0.4,
		center : {
			x : width * 0.5,
			y : height * 0.15
		}
	});



	addConfess_button.addEventListener('click', function(e) {

		
		 require('/ui/common/AddConfess').AddProject();
	});

	var list_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/mylist/mylist.png',
		height : height * 0.12,
		width : width * 0.4,
		center : {
			x : width * 0.7,
			y : height * 0.15
		}
	});
	list_button.addEventListener('click',function(e){
		new require('/ui/common/ProjectListView')();
		
		
	});
	
	var help_Button = Titanium.UI.createButton({
		backgroundImage :'/images/button/front_info/info_nav_button.png',
		backgroundSelectedImage : '/images/button/front_info/info_nav_button_pressed.png',
		
		top : height *0.1,
		left : width *0.05,
		width : width * 0.2,
		height : height * 0.1
	});
	
	help_Button.addEventListener('click',function(e){
		require('/ui/common/Help/helpWin').openWin();
	});
	
	under_bar.add(help_Button);

	under_bar.add(move_button);


//	under_bar.add(item_button);
	under_bar.add(addConfess_button);
//	under_bar.add(list_button);

	return under_bar;
}
