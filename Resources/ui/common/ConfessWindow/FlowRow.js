/*
 * created by fvi@
 *
 * created @201210121012
 *
 */

exports.createRowObject = function(image_path,title,comment, side, id,from_win) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var source_row = require('/ui/common/ProjectTableRow').createRowObject(image_path, title, side, id);

	//source_row.row.setLeftImage(null);
	var row_height = source_row.row.getHeight();
	var row_width  = source_row.row.getWidth();
	
	
	//日付を一旦削除　後日追加予定
	var status_label = Titanium.UI.createLabel({
		text : 'by 名無しさん　',
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		top:row_height *0.1,
		left:width * 0.25
		
	});
	source_row.row.add(status_label);
	
	function setCommentText(com_json){
			
	var status_string = '';
	
	
	
		status_string +='イイね：' + com_json.interest+',';
	
		status_string +='マズイね：' + com_json.bad+',';

		status_string += 'あり得ない！：' + com_json.noway;
		
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
		top:row_height *0.75,
		left:width * 0.25
		
	});
	comment_label.setText(setCommentText(JSON.parse(comment)));
	
	source_row.row.add(comment_label);
	
	var response_button = Titanium.UI.createButton({
		title:'レス',
		width:width *0.2,
		height:width *0.2,
		left:width*0.03
	//	center:{x:row_width *0.1,y:row_height *0.5}
		
	});
	
	response_button.addEventListener('click',function(e){
		
		
		require('/ui/common/ConfessWindow/ResponseBoard').openView(from_win,{status:JSON.parse(comment),title:title,post_id:id});
	
	});
	
	source_row.row.add(response_button);
	
	Titanium.App.addEventListener('update_row',function(e){
		if(e.id == id){
			comment = e.status;
			comment_label.setText(setCommentText(JSON.parse(e.status)));
		}
	})

	return source_row;
}
