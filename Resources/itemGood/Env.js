/*
 * this module will convert from text to json
 *
 *
 *
 * CREATED @ 20121002
 *
 */

exports.env = function(from) {
	//JSON文字列からデータを形成
	try {
		return eval(from);
	} catch(err) {
		Titanium.API.info('error at perse JSON')
		return '';
	}
}
