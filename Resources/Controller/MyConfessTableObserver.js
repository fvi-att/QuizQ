/**
 * @author fviAtt
 * 
 * created @ 2013 04 23 
 */

var controller = function(){}
if(!controller.removed)
	controller.removed = [];
	
exports.setRowData = function(row_data){
	controller.rowdata = row_data
}


exports.setTableView = function(tableview){
		controller.tableview = tableview
	
}
exports.addListenerRemoved = function(func){
	controller.removed.append(func);
}

//temp

exports.fireEvent = function(){
	for(cnt = 0;cnt < controller.removed.length;cnt++){
		//登録したメソッドすべてを実行するようにする
		controller.removed[cnt](controller.tableView)
	}
}
