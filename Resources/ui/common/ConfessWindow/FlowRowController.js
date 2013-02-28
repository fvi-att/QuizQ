/**
 * @author fvi@
 * @created at 20121218
 */
var rows = function(){};


exports.createRows = function(download,win) {
	
	//データオブジェクトを管理
	var flow_data = require('/Confess/Flowdata').createDataObject(download);
	
	rows = function() {}
	
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

		var createdRow = require('/ui/common/ConfessWindow/FlowRow').createRowObject('', data[count].created_at,data[count].title, data[count].content, 0, data[count].id,data[count].photo, win,count,data[count]);
		createdRow.row.setHasChild(false);
		createdRow.row.post_username = data[count].user;
		
		createdRow.row.count = count;
		
		temp_obj.push(createdRow);
		
		//flowTableView.appendRow(createdRow.row);
	}
	
	for ( count = 0; count < download.length; count++){
		createRow(count);
	}

	//ここからテキスト変更 json -> text
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
		if (com_json.ganbare){
			status_string += '\nガンバレー!:' + com_json.ganbare;
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
			
			//source_row.row.setHeight(source_row.row.getHeight()*(1 + 0.05 * comment_sumCnt))

		return status_string;

	}
	
	Titanium.App.addEventListener('update_row', function(e) {
		
		var selected_row = rows.getRowData(e.row_cnt)
			
			selected_row.comment_label.setText(setCommentText(e.status));	
	});
	
	//終了
	
	//temp return 
	return rows.getRows()

}

