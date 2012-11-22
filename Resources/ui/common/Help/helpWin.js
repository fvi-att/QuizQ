/**
 * @author fvi
 * 
 * 
 * created by fvi @
 * created @ 2012 11 08
 */
exports.openWin = function(url){
	var page_url =url;
	if(!page_url)
		page_url = 'http://xicolo.com/wordpress/?page_id=179';
		
		
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var win = Titanium.UI.createWindow({
		exitOnClose : false,
		fullscreen : false,
		navBarHidden: true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	
	var webView = Titanium.UI.createWebView({
		
		url:page_url,
		weight:Titanium.UI.FILL,
		height:Titanium.UI.FILL
	});
	
	win.add(webView);
	
	var close_button = Titanium.UI.createButton({
		title : '閉じる',
		width : width * 0.6,
		height : 'auto',
		top : height * 0.9
	});

	close_button.addEventListener('click', function(e) {
		win.close();
		delete win;
	});

	win.add(close_button);
	
	win.open();
}
