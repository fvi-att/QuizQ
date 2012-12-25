/**
 * @author fvi
 *
 * created@ 2012 07 19
 * refactering 2012 1202
 */

function FlowWindow(download) {
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var win = require('/ui/common/CommonFlowTableWindow')()
	var flowTableView = win.table;
	//テーブルがセットになっているのでそこに付け足していく感じで書いていく。

	var row_array = require('/ui/common/ConfessWindow/FlowRowController').createRows(download, win);

	for ( cnt = 0; cnt < row_array.length; cnt++) {
		flowTableView.appendRow(row_array[cnt].row);
	}

	// require AdMob
	var Admob = require('ti.admob');

	// then create an adMob view
	var adMobView = Admob.createView({
		publisherId : "a150bf49d1e3f16",
		testing : false, // default is false
		//top: 10, //optional
		//left: 0, // optional
		//right: 0, // optional
		bottom : height * 0.1, // optional
		adBackgroundColor : "FF8855", // optional
		backgroundColorTop : "738000", //optional - Gradient background color at top
		borderColor : "#000000", // optional - Border color
		textColor : "#000000", // optional - Text color
		urlColor : "#00FF00", // optional - URL color
		linkColor : "#0000FF" //optional -  Link text color
		//primaryTextColor: "blue", // deprecated -- now maps to textColor
		//secondaryTextColor: "green" // deprecated -- now maps to linkColor

	});
	win.add(adMobView);

	win.add(require('/ui/common/optbar/optbar').createCommonOptBar());
}

module.exports = FlowWindow;

