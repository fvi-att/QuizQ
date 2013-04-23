/**
 * @author fviAtt
 * 
 * created @ 2013 04 23 
 */

var controller = function(){}
if(!controller.removed)
	controller.removed = [];
	
	
evports.setTableView = function(tableview){
		controller.tableview = tableview
	
}
exports.addListener = function(func){
	controller.removed.append(func);
}

//temp

exports.

