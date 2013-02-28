/**
 * @author fvi
 */
exports.Perse = function(res_obj){
		var comment_sumCnt = 0;
		
		var status_string = '';

		status_string += 'イイね：' + res_obj.interest + ',';

		status_string += 'マズイね：' + res_obj.bad + ',';

		status_string += 'あり得ない！：' + res_obj.noway;

		if (res_obj.miserable){
			status_string += '\n辛いね！わかるよ：' + res_obj.miserable;
			comment_sumCnt++;
		}
		if (res_obj.cheear){
			status_string += '\n勝負時！じゃん！：' + res_obj.cheear;
			comment_sumCnt++;
		}
		if (res_obj.ganbare){
			status_string += '\nガンバレー!:' + res_obj.ganbare;
			comment_sumCnt++;
		}
		if (res_obj.boon){
			status_string += '\n（^ω^)ワロタ・・：' + res_obj.boon;
			comment_sumCnt++;
		}
		if (res_obj.aruaru){
			status_string += '\nあるある！:' + res_obj.aruaru;
			comment_sumCnt++;
		}
		if (res_obj.aruaruneyo){
			status_string += '\nあるあるあ・・ねーよ:' + res_obj.aruaruneyo;
			comment_sumCnt++;
		}
		if (res_obj.orealy){
			status_string += '\nえっ　本当かなぁ？:' + res_obj.orealy;
			comment_sumCnt++;
		}
		if (res_obj.kawaii){
			status_string += '\nカワイイ！:' + res_obj.kawaii;
			comment_sumCnt++;
		}
		if (res_obj.whatsmatter){
			status_string += '\nどうしたの？:' + res_obj.whatsmatter;
			comment_sumCnt++;
		}
		if (res_obj.kuzu){
			status_string += '\nクズだねぇ:' + res_obj.kuzu;
			comment_sumCnt++;
		}
		if (res_obj.yes){
			status_string += '\nそうだね:' + res_obj.yes;
			comment_sumCnt++;
		}
		if (res_obj.what){
			status_string += '\n何それ？:' + res_obj.what;
			comment_sumCnt++;
		}
		if (res_obj.strange){
			status_string += '\nへんなのー:' + res_obj.strange;
			comment_sumCnt++;
		}
			
			//source_row.row.setHeight(source_row.row.getHeight()*(1 + 0.05 * comment_sumCnt))

		return {string:status_string,sumCnt:comment_sumCnt}
}
