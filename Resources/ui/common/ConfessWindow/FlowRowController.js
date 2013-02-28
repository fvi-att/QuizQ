/**
 * @author fvi@
 * @created at 20121218
 */
var rows = function(){};


exports.createRows = function(download,win) {
	
	//データオブジェクトを管理
	var flow_data = require('/Confess/Flowdata').createDataObject(download);
	
	rows = function() {}
	
	//temp obj
	var temp_obj =[];
	
	rows.getRows = function(){
		return temp_obj;
	}
	
	rows.getRowData = function(num){
		return temp_obj[num];
	}
	
	
	function createRow(count) {
		//いつかはセクションごとに分割で切るようにしていく
		var data = flow_data.getAllData()
		
		if (!data[count])
			return;

		var createdRow = require('/ui/common/ConfessWindow/FlowRow').createRowObject('', data[count].created_at,data[count].title, data[count].content, 0, data[count].id,data[count].photo, win,count,data[count]);
		createdRow.row.setHasChild(false);
		createdRow.row.post_username = data[count].user;
		
		createdRow.row.count = count;
		
		temp_obj.push(createdRow);
		
		//flowTableView.appendRow(createdRow.row);
	}
	
	for ( count = 0; count < download.length; count++){
		createRow(count);
	}

	//ここからテキスト変更 json -> text
	function setCommentText(com_json) {
		
		return require('/ResponseObj/Response2Str').Perse(com_json).string

	}
	
	Titanium.App.addEventListener('update_row', function(e) {
		
		var selected_row = rows.getRowData(e.row_cnt)
			
			selected_row.comment_label.setText(setCommentText(e.status));	
	});
	
	
	return rows.getRows()

}

