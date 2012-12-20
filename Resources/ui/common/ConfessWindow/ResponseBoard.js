/*
 * created by fvi@
 *
 * created @ 2012 09 11
 *
 */
//aboutが原因で正しくデータの更新を行えなかったのが原因　正しくデータを遷移できなかったのが原因
exports.openView = function(view, about) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	
	//現時点のポイントを取得する
	
	
	
	var slide_num = 0;
	var comment_data =[['イイね！','マズイね！','あり得ない！'],
					   ['辛いね、わかるよ','勝負時！じゃん！','（^ω^)ワロタ・・'],
					   ['あるある','あるあるあ・・ねーよ','本当かなぁ？'],
					   ['カワイイ！','どうしたの？','クズだねぇ'],
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
	
	function rePaintSwitch(){
		switch1.setValue(false);
		switch2.setValue(false);
		switch3.setValue(false);
		
		
		switch1.setTitle(comment_data[slide_num][0]);
		switch2.setTitle(comment_data[slide_num][1]);
		switch3.setTitle(comment_data[slide_num][2]);
	}

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
		rePaintSwitch();

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
		rePaintSwitch();
	});
	var ok_Button = Titanium.UI.createButton({
		backgroundImage : '/images/button/OK/trans/button.png',
		backgroundSelectedImage : '/images/button/OK/trans/button_pressed.png',
		height : height * 0.1,
		width : width * 0.5,
		top : height * 0.7
	});
	old_paper.add(ok_Button);

	//こいつが書き換え更新を行なっている　データの初期化とポイント追加処理
	function setCommentStatus(com_num){
		switch(com_num){
			case 0:
				if(about.status.interest){
					about.status.interest++;
				}else{
					about.status['interest'] = 1;
				}
				break;
			case 1:
				if(about.status.bad){
					about.status.bad++;
				}else{
					about.status['bad'] = 1;
				}
				break;
			case 2:
				if(about.status.noway){
					about.status.noway++;
				}else{
					about.status['noway'] = 1;
				}
				break;
			case 3:
				if(about.status.miserable){
					about.status.miserable++;
				}else{
					about.status['miserable'] = 1;
				}
				break;
			case 4:
				if(about.status.cheear){
					about.status.cheear++;
				}else{
					about.status['cheear'] = 1;
				}
				break;
			case 5:
				if(about.status.boon){
					about.status.boon++;
				}else{
					about.status['boon'] = 1;
				}
				break;
			case 6:
				if(about.status.aruaru){
					about.status.aruaru++;
				}else{
					about.status['aruaru'] = 1;
				}
				break;
			case 7:
				if(about.status.aruaruneyo){
					about.status.aruaruneyo++;
				}else{
					about.status['aruaruneyo'] = 1;
				}
				break;
			case 8:
				if(about.status.orealy){
					about.status.orealy++;
				}else{
					about.status['orealy'] = 1;
				}
				break;
				
				case 9:
				if(about.status.kawaii){
					about.status.kawaii++;
				}else{
					about.status['kawaii'] = 1;
				}
				break;
				case 10:
				if(about.status.whatsmatter){
					about.status.whatsmatter++;
				}else{
					about.status['whatsmatter'] = 1;
				}
				break;
				case 11:
				if(about.status.kuzu){
					about.status.kuzu++;
				}else{
					about.status['kuzu'] = 1;
				}
				break;
	
		}
	}

	ok_Button.addEventListener('click', function(e) {
		view.remove(back_temp_view);
		view.remove(old_paper);
		
		var point_cnt =0;

		if (switch1.value){
			point_cnt++;
			setCommentStatus(3*slide_num +0);
		}
		if (switch2.value){
			point_cnt++;
			setCommentStatus(3*slide_num +1);
		}
		if (switch3.value){
			point_cnt++;
			setCommentStatus(3*slide_num +2);
		}
		//更新系の処理を書いておくこと 		ポイントを加算し　投稿コメントに関する処理を行う。

		require('/ACS/Confess/ModifyPost').ModifyPost(about.post_id, about.status,about.row_cnt);
		
		require('/ACS/Confess/PointSystem/UpdatePoint_fromObject').createPoint(about.post_username.id,point_cnt);

	});

	old_paper.add(ok_Button);

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
		/*
		delete old_paper;
		delete back_temp_view;
		*/
	});

	old_paper.add(cancel_button);

	view.add(old_paper);

	return old_paper;
}
