/*
 * this module will convert from text to json
 *
 *
 *
 * CREATED @ 20121002
 *
 */
exports.toString = function(data){
	var ret_word = '{';
	if(data.money)
		ret_word += 'money:'+data.money;
	
	if(data.crop)
		ret_word += ',crop:'+data.crops;
	
	ret_word += '}'
	
	return ret_word;
}
exports.eval = function(from) {
	//JSON文字列からデータを形成
	try {
		return eval(from);
	} catch(err) {
		Titanium.API.info('error at perse JSON')
		return '';
	}
}
