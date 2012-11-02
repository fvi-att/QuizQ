/*
 * created by fvi@
 * created @ 2012 11 02
 *
 */

exports.createPoint = function(id, delta) {

	var Cloud = require('ti.cloud');
	alert(Cloud.Message);
	
	Cloud.Messages.create({
		to_id : id,
		body : delta,
		subject : 'Point',
		acl_name : 'All_Public'
	}, function(e) {
		if (e.success) {
			var message = e.messages[0];
			alert('Success:\\n' + 'id: ' + message.id + '\\n' + 'subject: ' + message.subject + '\\n' + 'body: ' + message.body + '\\n' + 'updated_at: ' + message.updated_at + '\n' + 'acl_rule :' + message.acl_name);
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
