/**
 * @author fvi@
 *
 * created @ 2012 08 06
 *http://blog.livedoor.jp/jimuguri/archives/51347962.html
 * blog.xole.net/article.php?id=769
 */

exports.CreateQuizWin = function(download) {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var quizNum = 1;
	var answer = "";
	var restTime = 100;

	//ユーザーの正解数、問題数に関する変数郡
	var result = [];
	//正解　=1 ,不正解  = -1 ,それ以外　0
<<<<<<< HEAD
	var background_path = require('/util/getbackPathWithTime').getPath();
	var win = Titanium.UI.createWindow({
		title : 'クイズ！：' + download.length + '問中' + quizNum + '問目',
		backgroundImage : background_path,
=======

	var win = Titanium.UI.createWindow({
		title : 'クイズ！：' + download.length + '問中' + quizNum + '問目',
		backgroundImage : '/images/background/note.jpg',
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		exitOnClose : false,
		fullscreen : false,
		orientationModes : [Titanium.UI.PORTRAIT],
		quizNum : 1
	});

<<<<<<< HEAD
	var quiz_background = Titanium.UI.createView({
		backgroundImage : '/images/opening/old_paper.jpg',
		width : width * 0.9,
		height : height * 0.3,
		top : height * 0.02
	});

	win.add(quiz_background);

=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
	var timerImage = Titanium.UI.createImageView({
		image : '/images/icon/time1.png',
		width : width * 0.1,
		height : 'auto',
		top : height * 0.02,
		left : width * 0.05,
	});

	win.add(timerImage);

	var timerLabel = Titanium.UI.createLabel({
		text : restTime,
		color : 'black',
		top : height * 0.02,
		left : width * 0.15
	});

	var interval = setInterval(function() {
		restTime--;
		timerLabel.setText(restTime);

		if (restTime <= 0) {
			//ForceFinishQuiz();
			ForceFinishQuiz();
			clearInterval(interval);
<<<<<<< HEAD

=======
			
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		}
	}, 1000);

	win.add(timerLabel);
	var text_label = Titanium.UI.createLabel({
		text : 'クイズ　第' + quizNum + '問\n' + download.quizs.Quiz[0].text,
		color : 'black',
<<<<<<< HEAD
		width : width * 0.8,
=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		top : height * 0.1

	});
	win.add(text_label);

	var ans_view = Titanium.UI.createView({
<<<<<<< HEAD
		backgroundImage : '/images/opening/old_paper.jpg',
=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		top : height * 0.4,
		height : height * 0.3,
		width : width * 0.9,
		backgroundColor : 'gray',
		layout : 'vartical'
	});

	win.add(ans_view);

	var switch1 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title : download.quizs.Quiz[0].Answer.s1,
<<<<<<< HEAD
		color : 'black',
=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		value : false,
		top : 0,
		width : width * 0.8,
		height : ans_view.height / 3// necessary for textAlign to be effective
	});

	switch1.addEventListener('change', function(e) {

		if (e.value == true) {
			answer += '1';
		} else {
			answer = answer.replace(/1/g, '');
		}
	});
	var switch2 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title : download.quizs.Quiz[0].Answer.s2,
		value : false,
<<<<<<< HEAD
		color : 'black',
=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		top : ans_view.height * 0.33,
		width : width * 0.8,
		height : ans_view.height / 3// necessary for textAlign to be effective
	});

	switch2.addEventListener('change', function(e) {
		if (e.value == true) {
			answer += '2';
		} else {

			answer = answer.replace(/2/g, '');
		}
	});
	var switch3 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title : download.quizs.Quiz[0].Answer.s3,
		value : false,
<<<<<<< HEAD
		color : 'black',
=======
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		top : ans_view.height * 0.66,
		width : width * 0.8,
		height : ans_view.height / 3 // necessary for textAlign to be effective
	});
	switch3.addEventListener('change', function(e) {
		if (e.value == true) {
			answer += '3';
		} else {

			answer = answer.replace(/3/g, '');
		}
	});
	ans_view.add(switch1);
	ans_view.add(switch2);
	ans_view.add(switch3);

<<<<<<< HEAD
	var button = new require('/ui/common/button/button')('ok_new');
=======
	var button = new require('/ui/common/button/button')('ok');
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
	button.setTop(height * 0.75);
	win.add(button);

	function ForceFinishQuiz() {
		//時間切れなどの場合に強制的に終了させる
<<<<<<< HEAD

=======
		
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		while (download.length >= quizNum) {
			result.push(-1);
			quizNum++;
		}
<<<<<<< HEAD

=======
		
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8
		win.add(new require('/ui/common/ResultQuizView')(download, result, win));

	}

	function SetQuiz() {

		if (download.length < quizNum) {
			win.add(new require('/ui/common/ResultQuizView')(download, result, win));
			clearInterval(interval);
			//	clearTimeout(over_time);
			return;
		}

		win.setTitle('クイズ！：' + download.length + '問中' + quizNum + '問目');
		text_label.setText('クイズ　第' + quizNum + '問\n' + download.quizs.Quiz[quizNum - 1].text)
		switch1.setTitle(download.quizs.Quiz[quizNum - 1].Answer.s1);
		switch2.setTitle(download.quizs.Quiz[quizNum - 1].Answer.s2);
		switch3.setTitle(download.quizs.Quiz[quizNum - 1].Answer.s3);
		if (download.quizs.Quiz[quizNum - 1].type == 3) {
			switch1.setVisible(true);
			switch2.setVisible(true);
			switch3.setVisible(true);

			switch1.setValue(false);
			switch2.setValue(false);
			switch3.setValue(false);
		}
		if (download.quizs.Quiz[quizNum - 1].type == 4) {
			switch1.setVisible(false);
			switch2.setVisible(false);
			switch3.setVisible(false);

		}

	}

<<<<<<< HEAD
	var img = Titanium.UI.createImageView({
		width : 'auto',
		height : 'auto'
	});
	
	
	

	button.addEventListener('click', function(e) {
	//アンケート形式の場合の処理
	if (download.quizs.Quiz[quizNum - 1].type == 4) {
	alert('アンケートありがとうございます');
	result.push(1);
	quizNum++;
	SetQuiz();
	return;

	}
	//問題に関する　正解、不正解の処理
	if (answer == download.quizs.Quiz[quizNum - 1].Answer.text) {
	//正解処理
	//alert('正解です');
	//アニメーション開始
	img.setImage('/images/result/circle2.png');
	var positions = [];
	positions.push({x: 170, y: 300});
	positions.push({x: 130, y: 280});
	positions.push({x: 170, y: 260});
	positions.push({x: 130, y: 240});
	positions.push({x: 170, y: 220});
	positions.push({x: 130, y: 200});
	positions.push({x: 170, y: 180});
	
	win.add(img);

	img.animate({center: positions[0], opacity: 1, duration: 300}, function (){
	img.center = positions[0];
	img.animate({center: positions[1], duration: 300}, function (){
	img.center = positions[1];
	img.animate({center: positions[2], duration: 300}, function (){
	img.center = positions[2];
	img.animate({center: positions[3], duration: 300}, function (){
	img.center = positions[3];
	img.animate({center: positions[4], duration: 300}, function (){
	img.center = positions[4];
	img.animate({center: positions[5], duration: 300}, function (){
	img.center = positions[5];
	img.animate({center: positions[6], opacity: 0, duration: 500}, function (){
	win.remove(img);
	});
	});
	});
	});
	});
	});
	});
	//アニメーション終了
	result.push(1);
	answer = '';
	quizNum++;
	SetQuiz();

	} else {
		//不正解処理
		//alert('不正解です　answer:' + answer);
		//アニメーション開始
	img.setImage('/images/result/cross2.png');
	var positions = [];
	positions.push({x: 170, y: 300});
	positions.push({x: 130, y: 280});
	positions.push({x: 170, y: 260});
	positions.push({x: 130, y: 240});
	positions.push({x: 170, y: 220});
	positions.push({x: 130, y: 200});
	positions.push({x: 170, y: 180});
	
	win.add(img);

	img.animate({center: positions[0], opacity: 1, duration: 300}, function (){
	img.center = positions[0];
	img.animate({center: positions[1], duration: 300}, function (){
	img.center = positions[1];
	img.animate({center: positions[2], duration: 300}, function (){
	img.center = positions[2];
	img.animate({center: positions[3], duration: 300}, function (){
	img.center = positions[3];
	img.animate({center: positions[4], duration: 300}, function (){
	img.center = positions[4];
	img.animate({center: positions[5], duration: 300}, function (){
	img.center = positions[5];
	img.animate({center: positions[6], opacity: 0, duration: 500}, function (){
	win.remove(img);
	});
	});
	});
	});
	});
	});
	});
	//アニメーション終了
		result.push(-1);
		answer = '';
		quizNum++;
		SetQuiz();

	}
});

win.open();
=======

	button.addEventListener('click', function(e) {
		//アンケート形式の場合の処理
		if (download.quizs.Quiz[quizNum - 1].type == 4) {
			alert('アンケートありがとうございます');
			result.push(1);
			quizNum++;
			SetQuiz();
			return;

		}
		//問題に関する　正解、不正解の処理
		if (answer == download.quizs.Quiz[quizNum - 1].Answer.text) {
			//正解処理
			alert('正解です');
			result.push(1);
			answer = '';
			quizNum++;
			SetQuiz();

		} else {
			//不正解処理
			alert('不正解です　answer:' + answer);
			result.push(-1);
			answer = '';
			quizNum++;
			SetQuiz();

		}
	});

	win.open();
>>>>>>> 0e5682e4bab3d01c10cddd79355ba1fe0ab22cc8

}
