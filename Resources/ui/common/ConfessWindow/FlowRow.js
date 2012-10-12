/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path, title, side, id) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var source_row = require('/ui/common/ProjectTableRow').createRowObject(image_path, title, side, id);

	//source_row.row.setLeftImage(null);
	var row_height = source_row.row.getHeight();
	
	
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん　2012年10月12日',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'left',
		top:row_height * 0.02
		
	});
	source_row.row.add(status_label);
	
	
	var comment_label = Titanium.UI.createLabel({
		text : 'ワロスww :6  　だめだこりゃ!:10',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'left',
		top:row_height * 0.7
		
	});
	source_row.row.add(comment_label);

	return source_row;
}
