/**
 * @author fvi@
 * create 2012 07 19
 *
 */

exports.createRowObject = function(image_path, title, side, photo, id) {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	//画像生成に負荷がかかると感じたので一旦削除する　20121128

	if (!id)
		id = 'STUB';

	//titleの数で幅を大きくして行く
	var hasPhoto = 0;
	if (photo)
		hasPhoto = 1;


	
	var lf_count = Math.max(title.split("\n").length - 1,title.length / 12)
	//原初テーブルロー
	var row = Titanium.UI.createTableViewRow({
		backgroundImage : '/images/transparent.png',
		hasChild : true,
		height : height * 0.2 + (height * 0.1 * lf_count)+ hasPhoto * height * 0.30,
		//className : 'todo_row'+title+id,
		post_id : id,

	});
	var row_height = row.getHeight();
	var row_width = row.getWidth();

	if (photo && photo.urls) {
		
		var row_img = Titanium.UI.createImageView({
			image : photo.urls.small_240,
			height : 'auto',
			left:width *0.25,
			width : 'auto',
			top : height * 0.1
		});

		row_img.addEventListener('click', function(e) {
			//alert('touch to image');

		});
		
		row.add(row_img);

		
	}
	//マスターラベル
	var label = Titanium.UI.createLabel({
		text : title,
		color : 'black',
		font : {
			fontSize : width / 20
		},
		top:height * 0.1 + hasPhoto * height *0.3,
		textAlign : 'center',
		left : width * 0.25

	});
	row.add(label);

	
	return {
		row : row,
		image : row_img,
		label : label
//		side_img : arrow_img
	};

}
