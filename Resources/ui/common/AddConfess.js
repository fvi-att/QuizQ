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
		width : width,
		height : height * 0.82,
		top : 0
	});
	win.add(backImageView);

	var textArea = Titanium.UI.createTextArea({
		hintText : 'あなたの秘密のつぶやきをどうぞ\n(100字以内)',
		textAlign:'center',
		width:width *0.95,
		height : height * 0.45,
		top : 0
	});

	win.add(textArea);

	var junel_button = Titanium.UI.createButton({
		title : 'ジャンル',
		width : width * 0.7,
		height : height * 0.1,
		top : height * 0.48,
		
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
	and_button.setTouchEnabled(false);
	and_button.setOpacity(0.5);

	win.add(and_button);

	var button = new require('/ui/common/button/button')('add');
	button.setTop(height * 0.82);
	var select3;
	

	function UploadQuiz(e){
		var s3			　    = null;
		var collect_answer = null;
		
		if(quizType == 3){
			s3 = answerView.choice3.value;
			collect_answer = answerView.picker.custom_item;
		}else{
			s3 ='';
			collect_answer ='';
		}
		
		require('/ACS/UpLoadQuiz').UploadQuiz({
			ID : require('/util/random').getRandom(20),
			type : quizType,
			text : textArea.value,
			junel : ['テスト', '練習'],
			Answer : {
				s1 : answerView.choice1.value,
				s2 : answerView.choice2.value,
				s3 : s3,
				text : '' + collect_answer
			},
			junelNum : 9999,
			other : {}
		});
	}

	function hasWords(){
		if (textArea.value == '' ) {
			alert('まだ　埋まっていない欄があるようです');
			return;
		}
		UploadQuiz(e);
	}


	button.addEventListener('click', function(e) {

		hasWords()	
		win.close();
		delete win;
	})
	win.add(button);

	win.open();

	return win;
}

