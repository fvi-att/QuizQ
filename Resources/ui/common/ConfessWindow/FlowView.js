/**
 * @author fvi
 *
 * created@ 2012 07 19
 * refactering 2012 1202
 */

function FlowWindow(download) {
	var win = require('/ui/common/CommonFlowTableWindow')()
	var flowTableView = win.table;
	
	var row_array = require('/ui/common/ConfessWindow/FlowRowController').createRows(download,win);
	
	for(cnt = 0;cnt < row_array.length;cnt++){
		flowTableView.appendRow(row_array[cnt].row);
	}

//	var flow_data = require('/Confess/Flowdata').createDataObject(download);
	
	
/*	
	function createRow(count) {
		//いつかはセクションごとに分割で切るようにしていく
		var data = flow_data.getAllData()
		
		if (!data[count])
			return;

		var createdRow = require('/ui/common/ConfessWindow/FlowRow').createRowObject('', data[count].created_at,data[count].title, data[count].content, 0, data[count].id,data[count].photo, win,count);
		createdRow.row.setHasChild(false);
		createdRow.row.post_username = data[count].user;
		
		flowTableView.appendRow(createdRow.row);
	}
*/	
	
/*	
	if (Titanium.App.Properties.getBool('flow_side')) {
		for ( count = 0; count < download.length; count++)
			createRow(count);

	} else {
		//falseのときtwitter形式にする
		for ( count = download.length; count > -1; count--)
			createRow(count);
	}
*/
}

module.exports = FlowWindow;

