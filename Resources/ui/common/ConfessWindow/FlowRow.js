/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path, created_at, title, comment, side, id, photo, from_win) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var common_row = require('/ui/common/CommonConfessRow').createCommonRow(image_path, title, side, photo, id, comment,created_at);


	//共通化されたテーブルローに対してレスポンスボタンを設ける
	
	
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
			post_id : id,
			post_username : common_row.row.post_username
		});

	});

	common_row.row.add(response_button);


	
	return common_row;
}
