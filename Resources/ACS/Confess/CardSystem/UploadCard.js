/*
 * created by fvi@
 * created @ 2013 01 03
 *
 */

exports.UploadCard = function(id,content) {

	var Cloud = require('ti.cloud');
	Cloud.Objects.create({
		classname : 'secret_card1',
		fields : {
			content: content,
			card_id : id
		}
	}, function(e) {
		if (e.success) {
			//alert(JSON.stringify(point));
			
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
