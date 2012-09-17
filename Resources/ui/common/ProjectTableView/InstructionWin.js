/*
 * created @ 2012 08 18
 * 
 * created by fvi@
 * 
 */


exports.createIntroduction = function(id){
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	var discribe_window = Titanium.UI.createWindow({
		title : 'タイトル',
		backgroundImage : '/images/note.jpg',
		exitOnClose : false,
		fullscreen : false
	});

	var tableView = Titanium.UI.createTableView({
		data : rows,
		width : Titanium.UI.FILL,
		height : height * 0.7,
		top : height * 0.05,
		showVerticalScrollIndicator:true

	});
	
	var ok_button = new require('/ui/common/button/button')('ok');

	ok_button.setTop(height * 0.75);
	ok_button.setWidth(width * 0.5);
	ok_button.setHeight('auto');
	ok_button.setLeft(width * 0.5);
	discribe_window.add(ok_button);
	
	ok_button.addEventListener('click',function(e){
		discribe_window.close();
	});
	
	discribe_window.open();



}
