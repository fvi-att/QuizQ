/**
 * @author fvi@
 * created@ 2012 07 18
 *
 *
 */

//STUB ADD HELLO BOY
exports.AddProject = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;


	var background_path = require('/util/getbackPathWithTime').getPath();
	var win = Titanium.UI.createWindow({
		title : '',
		backgroundImage : background_path,
		exitOnClose : false,
		fullscreen : false,
		navBarHidden: true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var backImageView = Titanium.UI.createImageView({
		image : '/images/opening/old_paper.jpg',
		width : width　*0.98,
		height : height * 0.81,
		top : height *0.01
	});
	win.add(backImageView);

	var textArea = Titanium.UI.createTextArea({
		hintText : 'あなたの秘密のつぶやきをどうぞ\n(100字以内)',
		textAlign:'center',
		width:width *0.95,
		height : height * 0.45,
		top : height *0.05
	});

	win.add(textArea);

	var junel_button = Titanium.UI.createButton({
		title : 'ジャンル',
		width : width * 0.7,
		height : height * 0.1,
		top : height * 0.5,
		
	});

	junel_button.addEventListener('click', function(e) {
		require('/ui/common/AddField/Selectjunel').openView(win);

	});

	win.add(junel_button);

	var project_image = new require('/ui/common/imageFrame/MenuProjectFrame')();

	project_image.setTop(height * 0.6);
	project_image.setLeft(width * 0.5);

	win.add(project_image);

	var and_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/And/button.png',
		backgroundSelectedImage : '/images/button/And/button_pressed.png',
		height : height * 0.2,
		width : height * 0.2,
		top : height * 0.6,
		left : width * 0.05

	});
	//and_button.setTouchEnabled(false);
	and_button.setOpacity(0.5);
	
	and_button.addEventListener('click',function(e){
		Titanium.UI.createNotification({
			duration : 3000,
			message : "たくさんつぶやくと使えるようになるかも"
		}).show();
	})

	win.add(and_button);

	var button = new require('/ui/common/button/button')('add');
	button.setTop(height * 0.82);
	
	
	function hasWords(){
		if (textArea.value == '' ) {
			alert('中に何もつぶやかれていませんよ！');
			return　false;
		}
		
		return require('/ACS/Confess/CreatePost').createPost(textArea.value,textArea.value);
	}


	button.addEventListener('click', function(e) {

		if(hasWords()){
			win.close();
			delete win;
		}
	})
	win.add(button);

	win.open();

	return win;
}

