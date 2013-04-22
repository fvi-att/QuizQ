/**
 * @author fvi
 */
exports.Perse = function(res_obj){
		var comment_sumCnt = 0;
		
		var status_string = '';
		
		var keyDict = ['miserable','cheear','ganbare','boon','aruaru','aruaruneyo','orealy','kawaii','whatsmatter','kuzu']
		
		function getMessagefromObj(keyValue){
			return L(keyValue)+':'+eval('res_obj.'+keyValue)
		}
	
		//デフォルト3択　イイね　マズイね　あり得ない！
		status_string += 'イイね：' + res_obj.interest + ',';

		status_string += 'マズイね：' + res_obj.bad + ',';

		status_string += 'あり得ない！：' + res_obj.noway;
		
		for(cnt = 0;cnt < keyDict.length;cnt++){
<<<<<<< HEAD
			if(getMessagefromObj(keyDict[cnt]))
				continue
=======
			
			if(!eval('res_obj.'+keyDict[cnt]))
				continue
			
			
>>>>>>> 2b7de7e8030ec84a8a4aee209adfe9eb5dd482e8
			status_string += getMessagefromObj(keyDict[cnt])
			comment_sumCnt++
		}

		return {string:status_string,sumCnt:comment_sumCnt}
}
