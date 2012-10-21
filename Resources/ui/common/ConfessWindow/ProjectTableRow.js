/**
 * @author fvi
 * create 2012 07 19
 *
 */

exports.createRowObject = function(image_path, title, side, photo, id) {

	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var leftImagePath = '';

	if (side < 0)
		leftImagePath = '/images/result/cross2.png';

	if (side > 0)
		leftImagePath = '/images/result/circle2.png';

	if (side == 0)
		leftImagePath = '/images/result/clear1.png';

	if (!id)
		id = 'STUB';

	//titleの数で幅を大きくして行く
	var hasPhoto = 0;
	if (photo)
		hasPhoto = 1;

	var lf_count = title.split("\n").length - 1;
	var row = Titanium.UI.createTableViewRow({
		//		leftImage:leftImagePath,
		backgroundImage : '/images/transparent.png',
		hasChild : true,
		height : height * 0.2 + height * 0.05 * lf_count + hasPhoto * height * 0.15,
		className : 'todo_row',
		id : id,

	});
	var row_height = row.getHeight();
	var row_width = row.getWidth();

	if (photo) {
		
		var row_img = Titanium.UI.createImageView({
			image : photo.urls.thumb_100,
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
	var label = Titanium.UI.createLabel({
		text : title,
		color : 'black',
		font : {
			fontSize : width / 20
		},
		top:height * 0.08 + hasPhoto * height *0.15,
		textAlign : 'center',
		left : width * 0.25

	});
	row.add(label);
	/*
	var arrow_path = '/images/Table/arrowUp1.png';
	if (side < 0)
		arrow_path = '/images/Table/arrowDown1.png';

	if (side == 0)
		arrow_path = '/images/Table/complete_stamp.gif'
	*/

	
	return {
		row : row,
		image : row_img,
		label : label
//		side_img : arrow_img
	};

}
