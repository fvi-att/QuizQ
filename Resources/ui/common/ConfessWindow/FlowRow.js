/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path, title, side, id,from_win) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var source_row = require('/ui/common/ProjectTableRow').createRowObject(image_path, title, side, id);

	//source_row.row.setLeftImage(null);
	var row_height = source_row.row.getHeight();
	var row_width  = source_row.row.getWidth();
	
	
	
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん　2012年10月12日',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		top:row_height *0.1,
		left:width * 0.25
		
	});
	source_row.row.add(status_label);
	
	
	var comment_label = Titanium.UI.createLabel({
		text : 'ワロスww :6  　だめだこりゃ!:10',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		top:row_height *0.75,
		left:width * 0.25
		
	});
	source_row.row.add(comment_label);
	
	var response_button = Titanium.UI.createButton({
		title:'レス',
		width:width *0.2,
		height:width *0.2,
		left:width*0.03
	//	center:{x:row_width *0.1,y:row_height *0.5}
		
	});
	
	response_button.addEventListener('click',function(e){
		
		require('/ui/common/SelectBoard/SelectBoard').openView(from_win);
	});
	
	source_row.row.add(response_button);

	return source_row;
}
