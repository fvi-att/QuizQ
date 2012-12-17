/**
 * @author fvi@
 * @created at 20121218
 */

exports.createRows = function(download,win) {
	
	//データオブジェクトを管理
	var flow_data = require('/Confess/Flowdata').createDataObject(download);
	
	var rows = function() {}
	
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

		var createdRow = require('/ui/common/ConfessWindow/FlowRow').createRowObject('', data[count].created_at,data[count].title, data[count].content, 0, data[count].id,data[count].photo, win,count);
		createdRow.row.setHasChild(false);
		createdRow.row.post_username = data[count].user;
		
		createdRow.row.count = count;
		
		temp_obj.push(createdRow);
		
		//flowTableView.appendRow(createdRow.row);
	}
	
	if (Titanium.App.Properties.getBool('flow_side')) {
		for ( count = 0; count < download.length; count++)
			createRow(count);

	} else {
		//falseのときtwitter形式にする
		for ( count = download.length; count > -1; count--)
			createRow(count);
	}
	
	//temp return 
	return rows.getRows()

}

