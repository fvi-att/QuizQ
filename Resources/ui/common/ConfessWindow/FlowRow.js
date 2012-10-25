/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path, created_at, title, comment, side, id, photo, from_win) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var source_row = require('/ui/common/ConfessWindow/ProjectTableRow').createRowObject(image_path, title, side, photo, id);

	//source_row.row.setLeftImage(null);
	var row_height = source_row.row.getHeight();
	var row_width = source_row.row.getWidth();

	var json_status = JSON.parse(comment);

	function PlusStamp() {
	//	if (!photo) {

			if (json_status.bad > 0) {

				var stamp_img = Titanium.UI.createImageView({
					image : '/images/Stamp/kijyo.png',
					width : 'auto',
					height : row_height * 0.8,
					right : 0,
				});
				source_row.row.add(stamp_img);
				
				return;

			}else if(json_status.noway >0){
				var stamp_img = Titanium.UI.createImageView({
					image : '/images/Stamp/angry_cat.png',
					width : 'auto',
					height : row_height * 0.8,
					bottom : 0,
				});
				source_row.row.setHeight(source_row.row.getHeight() + height *0.15)
				source_row.row.add(stamp_img);
				
				return;
			}else if(json_status.interest >0){
				/*
				var stamp_img = Titanium.UI.createImageView({
					image : '/images/Stamp/kijyo.png',
					width : 'auto',
					height : row_height * 0.8,
					right : 0,
				});
				source_row.row.add(stamp_img);
				
				return;
				*/
			}
		

	}

//	PlusStamp();

	//日付を一旦削除　後日追加予定
	//var time_label = require('/util/GetJSTime').getJST(created_at)
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん\n' + created_at,
		color : 'black',
		font : {
			fontSize : width / 27
		},
		textAlign : 'left',
		top : row_height * 0.05,
		left : width * 0.25

	});
	source_row.row.add(status_label);

	function setCommentText(com_json) {

		var status_string = '';

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
			status_string += '\nあるある！:'+com_json.aruaru;
		if(com_json.aruaruneyo)
			status_string += '\nあるあるあ・・ねーよ:'+com_json.aruaruneyo;
		if(com_json.orealy)
			status_string += '\nえっ　本当かなぁ？:'+com_json.orealy;

		return status_string;
	}

	//var comment_status = JSON.parse(comment)

	var comment_label = Titanium.UI.createLabel({
		//text : status_string,
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		bottom:0,
		left : width * 0.25

	});
	comment_label.setText(setCommentText(JSON.parse(comment)));

	source_row.row.add(comment_label);

	var response_button = Titanium.UI.createButton({
		title : 'レス',
		width : width * 0.2,
		height : width * 0.2,
		left : width * 0.03
		//	center:{x:row_width *0.1,y:row_height *0.5}

	});

	response_button.addEventListener('click', function(e) {

		require('/ui/common/ConfessWindow/ResponseBoard').openView(from_win, {
			status : JSON.parse(comment),
			title : title,
			post_id : id
		});

	});

	source_row.row.add(response_button);

	Titanium.App.addEventListener('update_row', function(e) {
		if (e.id == id) {
			comment = e.status;
			comment_label.setText(setCommentText(JSON.parse(e.status)));
		}
	})

	return source_row;
}
