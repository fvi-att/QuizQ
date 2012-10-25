/*
 * created by fvi@
 *
 * created @ 2012 09 11
 *
 */

exports.openView = function(view, about) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	/*

		status_string += 'イイね：' + com_json.interest + ',';

		status_string += 'マズイね：' + com_json.bad + ',';

		status_string += 'あり得ない！：' + com_json.noway;
		
		if(com_json.miserable)
			status_string += '\n辛いね！わかるよ：'+com_json.miserable;
		if(com_json.cheear)
			status_string += '\n勝負時！じゃん！：'+com_json.cheear;
		if(com_json.boon)
			status_string += '\n（^ω^)ワロタ・・：'+com_json.boon;
		if(com_json.aruaru)
			status_string += '\nあるある！';
		if(com_json.aruaruneyo)
			status_string += '\nあるあるあ・・ねーよ';
		if(com_json.orealy)
			status_string += '\n本当かなぁ？byゴ●リ';
	 */
	var slide_num = 0;
	var comment_data =[['イイね！','マズイね！','あり得ない！'],
					   ['辛いね、わかるよ','勝負時！じゃん！','（^ω^)ワロタ・・'],
					   ['あるある','あるあるあ・・ねーよ','本当かなぁ？'],
					  ];
	
	
	
	
	
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
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		top : old_paper.height * 0.05,

	});
	old_paper.add(status_label);

	var scrollView = Titanium.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		backgroundImage:'/images/transparent.png',
		top : old_paper.height * 0.1,
		height: old_paper.height *0.34,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true
	});

	var title_label = Titanium.UI.createLabel({
		text : about.title,
		color : 'black',
		font : {
			fontSize : width / 20
		},
		textAlign : 'center',
		height:'auto',
		width:old_paper.width * 0.9,
		top : old_paper.height *0.05,

	});
	scrollView.add(title_label);
	
	old_paper.add(scrollView);

	var everyone_label = Titanium.UI.createLabel({
		text : 'みんなのレス一覧',
		textAlign : 'left',
		top : old_paper.height * 0.44,
		color : 'black',
		font : {
			fontSize : width / 30
		},
	});
	old_paper.add(everyone_label);
	var switch1 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title :comment_data[0][0],
		value : false,

		color : 'black',

		top : old_paper.height * 0.45,
		width : old_paper.width * 0.8,
		height : old_paper.height * 0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch1);
	var switch2 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title : comment_data[0][1],
		value : false,

		color : 'black',

		top : old_paper.height * 0.55,
		width : old_paper.width * 0.8,
		height : old_paper.height * 0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch2);

	var switch3 = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		title : comment_data[0][2],
		value : false,

		color : 'black',

		top : old_paper.height * 0.65,
		width : old_paper.width * 0.8,
		height : old_paper.height * 0.1// necessary for textAlign to be effective
	});
	old_paper.add(switch3);

	var left_shift_button = Titanium.UI.createButton({
		title : '←',
		width : old_paper.width * 0.3,
		height : old_paper.height * 0.1,
		center:{x:old_paper.width * 0.3,y:old_paper.height * 0.8}
	});
	old_paper.add(left_shift_button);

	left_shift_button.addEventListener('click', function(e) {
		
		if(slide_num -1 <0)
			return;
		slide_num--;
		switch1.setTitle(comment_data[slide_num][0]);
		switch2.setTitle(comment_data[slide_num][1]);
		switch3.setTitle(comment_data[slide_num][2]);
		/*
		Titanium.UI.createNotification({
			duration : 3000,
			message : "もうしばらくするとつかえるようになるかも"
		}).show();
		*/
	});
	
	var right_shift_button = Titanium.UI.createButton({
		title : '→',
		width : old_paper.width * 0.3,
		height : old_paper.height * 0.1,
		center:{x:old_paper.width * 0.7,y:old_paper.height * 0.8}
	});
	old_paper.add(right_shift_button);

	right_shift_button.addEventListener('click', function(e) {
		if(slide_num +2 >comment_data.length)
			return;
		slide_num++;
		
		switch1.setTitle(comment_data[slide_num][0]);
		switch2.setTitle(comment_data[slide_num][1]);
		switch3.setTitle(comment_data[slide_num][2]);
		/*
		Titanium.UI.createNotification({
			duration : 3000,
			message : "もうしばらくするとつかえるようになるかも"
		}).show();
		*/
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
		view.remove(back_temp_view);
		view.remove(old_paper);

		if (switch1.value)
			about.status.interest++;
		if (switch2.value)
			about.status.bad++;
		if (switch3.value)
			about.status.noway++;

			about.status['boon'] =1;
		//	alert('uploading::'+JSON.stringify(about.status))

		//更新系の処理を書いておくこと
		require('/ACS/Confess/UpdatePost').UpdatePost(about.post_id, JSON.stringify(about.status))
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

	view.add(old_paper);

	return old_paper;
}
