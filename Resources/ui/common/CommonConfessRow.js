/**
 * @author fvi
 * 
 * created by fvi@
 * 
 * created @ 2012 12 02
 */
exports.createCommonRow = function(image_path, title, side, photo, id, comment,created_at,num){
	
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var source_row = require('/ui/common/ConfessWindow/ProjectTableRow').createRowObject(image_path, title, side, photo, id);
	
	
	var row_height = source_row.row.getHeight();
	var row_width = source_row.row.getWidth();

	var json_status = JSON.parse(comment);
	

//ハンドルネームの設定に関する処理　ここでメッセージ内にハンドルネームが存在していた場合
//表示を行う
	var poster_name = json_status._HN

	if (!poster_name)
		poster_name = '名無しさん';

	var status_label = Titanium.UI.createLabel({
		text : 'by' + poster_name + '\n' + created_at,
		color : 'black',
		font : {
			fontSize : width / 27
		},
		textAlign : 'left',
		top : row_height * 0.05,
		left : width * 0.25

	});
	source_row.row.add(status_label);

	function setCommentText(com_json) {
		var comment_sumCnt = 0;
		
		var status_string = '';

		status_string += 'イイね：' + com_json.interest + ',';

		status_string += 'マズイね：' + com_json.bad + ',';

		status_string += 'あり得ない！：' + com_json.noway;

		if (com_json.miserable){
			status_string += '\n辛いね！わかるよ：' + com_json.miserable;
			comment_sumCnt++;
		}
		if (com_json.cheear){
			status_string += '\n勝負時！じゃん！：' + com_json.cheear;
			comment_sumCnt++;
		}
		if (com_json.boon){
			status_string += '\n（^ω^)ワロタ・・：' + com_json.boon;
			comment_sumCnt++;
		}
		if (com_json.aruaru){
			status_string += '\nあるある！:' + com_json.aruaru;
			comment_sumCnt++;
		}
		if (com_json.aruaruneyo){
			status_string += '\nあるあるあ・・ねーよ:' + com_json.aruaruneyo;
			comment_sumCnt++;
		}
		if (com_json.orealy){
			status_string += '\nえっ　本当かなぁ？:' + com_json.orealy;
			comment_sumCnt++;
		}
		if (com_json.kawaii){
			status_string += '\nカワイイ！:' + com_json.kawaii;
			comment_sumCnt++;
		}
		if (com_json.whatsmatter){
			status_string += '\nどうしたの？:' + com_json.whatsmatter;
			comment_sumCnt++;
		}
		if (com_json.kuzu){
			status_string += '\nクズだねぇ:' + com_json.kuzu;
			comment_sumCnt++;
		}
		if (com_json.yes){
			status_string += '\nそうだね:' + com_json.yes;
			comment_sumCnt++;
		}
		if (com_json.what){
			status_string += '\n何それ？:' + com_json.what;
			comment_sumCnt++;
		}
		if (com_json.strange){
			status_string += '\nへんなのー:' + com_json.strange;
			comment_sumCnt++;
		}
			
			source_row.row.setHeight(source_row.row.getHeight()*(1 + 0.05 * comment_sumCnt))

		return status_string;

	}

	//var comment_status = JSON.parse(comment)

	var comment_label = Titanium.UI.createLabel({
		//text : status_string,
		color : 'black',
		font : {
			fontSize : width / 25
		},
		textAlign : 'center',
		bottom : 0,
		left : width * 0.25

	});
	
	source_row.comment_label = comment_label;
	
	comment_label.setText(setCommentText(JSON.parse(comment)));

	source_row.row.add(comment_label);

	//コントローラ対策
	if(num)
		source_row.num = num;
		
		
	return source_row;
	
	
}
