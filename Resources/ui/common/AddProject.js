/**
 * @author fvi@
 * created@ 2012 07 18
 *
 *
 */

//STUB ADD HELLO BOY
exports.AddProject = function() {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var quizType = 3;
	//3=>3択問題　4=>4択問題

	var background_path = require('/util/getbackPathWithTime').getPath();
	var win = Titanium.UI.createWindow({
		title : '知識、知恵を分け与える',
		backgroundImage : background_path,
		exitOnClose : false,
		fullscreen : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	var backImageView = Titanium.UI.createImageView({
		image : '/images/opening/old_paper.jpg',
		width : width,
		height : height * 0.8,
		top : 0
	});
	win.add(backImageView);

	var textArea = Titanium.UI.createTextArea({
		hintText : '問題をここに入れてください',
		width : Titanium.UI.FILL,
		height : height * 0.15,
		top : 0
	});

	win.add(textArea);

	var junel_button = Titanium.UI.createButton({
		title : 'ジャンル',
		width : width * 0.4,
		height : height * 0.1,
		top : height * 0.15,
		left : width * 0.05
	});

	junel_button.addEventListener('click', function(e) {
		require('/ui/common/AddField/Selectjunel').openView(win);

	});

	win.add(junel_button);
	var type_picker = Ti.UI.createPicker({
		height : height * 0.1,
		width : width * 0.5,
		top : height * 0.15,
		left : width * 0.5
	});
	var type_data = [];
	type_data[0] = Ti.UI.createPickerRow({
		title : '3択問題',
		custom_item : '3'
	});
	type_data[1] = Ti.UI.createPickerRow({
		title : '単語問題',
		custom_item : '4'
	});
	/*
	 type_data[2] = Ti.UI.createPickerRow({
	 title : 'アンケート',
	 custom_item : '5'
	 });
	 */
	type_picker.add(type_data);

	type_picker.addEventListener('change', function(e) {
		win.remove(answerView.view);
		delete answerView;

		if (e.rowIndex == 0) {
			answerView = new require('/ui/common/AddField/Three_Choice_Field')();
			answerView.view.setBackgroundImage('/images/transparent.png');
			win.add(answerView.view);

			quizType = 3;
		}
		if (e.rowIndex == 1) {
			answerView = new require('/ui/common/AddField/Word_Field')();
			win.add(answerView.view);

			quizType = 4;
		}

	});

	win.add(type_picker);

	var answerView = new require('/ui/common/AddField/Three_Choice_Field')();
	answerView.view.setBackgroundImage('/images/transparent.png');

	win.add(answerView.view);

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
	and_button.setOpacity(0.7);

	win.add(and_button);

	var button = new require('/ui/common/button/button')('add');
	button.setTop(height * 0.8);
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
	function AddThreeChoice(e) {
		if (textArea.value == '' || answerView.choice1.value == '' || answerView.choice2.value == '' || answerView.choice3.value == '') {
			alert('まだ　埋まっていない欄があるようです');
			return;
		}
		
		UploadQuiz(e);
	}

	function AddWordChoice(e) {
		if (textArea.value == '' || answerView.choice1.value == '' || answerView.choice2.value == '' ) {
			alert('まだ　埋まっていない欄があるようです');
			return;
		}
		UploadQuiz(e);
	}


	button.addEventListener('click', function(e) {
		//見記入データが存在していた場合撤去する
			if(quizType == 3)
				AddThreeChoice(e);
			
			if(quizType == 4)
				AddWordChoice(e);
			
		win.close();
		delete win;
	})
	win.add(button);

	win.open();

	return win;
}

