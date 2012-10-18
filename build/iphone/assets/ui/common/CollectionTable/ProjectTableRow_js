/**
 * @author fvi
 * create 2012 07 19
 *
 */

exports.createRowObject = function(image_path,title,side,id) {
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	var row = require('/ui/common/ProjectTableRow').createRowObject('', title, 0,id);
	
	
	row.row.addEventListener('click',function(e){
		require('/ui/common/ProjectTableView/IntroWinStarter').QuizDownLoadStart(id);
	});
	
	/*
	var flick_from =0;
	
	var touchSheet = Titnaium.UI.createView({
		backgroundImage:'/images/transparent.png',
		width:width,
		height:height *0.15,
	});
	
	row.row.add(touchSheet);
	
	*/
	/*
	//クイズ結果表示ライブラリと共通化していたので継承化
	touchSheet.addEventListener('touchstart',function(e){
		flick_from = e.x;
	});
	touchSheet.addEventListener('touchend',function(e){
		alert(e.x - flick_from)
		if(e.x  - flick_from > 50){
			alert('flick:'+e.x  - flick_from)
		}else{
			alert('click:'+e.x  - flick_from)
		}
		flick_from=0;
	});
	
	*/
	
	
	
	return row;

}
