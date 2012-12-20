/**
 * @author fvi
 *
 * created@ 2012 07 19
 * refactering 2012 1202
 */

function FlowWindow(download) {
	var win = require('/ui/common/CommonFlowTableWindow')()
	var flowTableView = win.table;
	//テーブルがセットになっているのでそこに付け足していく感じで書いていく。
	
	var row_array = require('/ui/common/ConfessWindow/FlowRowController').createRows(download,win);
	
	for(cnt = 0;cnt < row_array.length;cnt++){
		flowTableView.appendRow(row_array[cnt].row);
	}
}

module.exports = FlowWindow;

