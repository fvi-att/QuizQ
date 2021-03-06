/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path, created_at, title, comment, side, id, photo, from_win,row_cnt,row_obj_prmt) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var common_row = require('/ui/common/CommonConfessRow').createCommonRow(image_path, title, side, photo, id, comment,created_at,row_cnt,row_obj_prmt);

	//共通化されたテーブルローに対してレスポンスボタンを設ける
	var response_button = Titanium.UI.createButton({
		backgroundImage : '/images/button/ResButton/resButton.png',
		backgroundSelectedImage : '/images/button/ResButton/resButton_Pressed.png',
		width : width * 0.2,
		height : width * 0.2,
		left : width * 0.03
		//	center:{x:row_width *0.1,y:row_height *0.5}

	});

	response_button.addEventListener('click', function(e) {
		//about　に関するデータ
		require('/ui/common/ConfessWindow/ResponseBoard').openView(from_win, {
			status : JSON.parse(comment),
			title : title,
			post_id : id,
			post_username : common_row.row.post_username,
			row_cnt:row_cnt
		},common_row);

	});

	common_row.row.add(response_button);


	
	return common_row;
}
