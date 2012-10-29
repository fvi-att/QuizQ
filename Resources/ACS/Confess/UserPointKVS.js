/*
 *
 * created @ 2012 1028
 *
 * created by fvi@
 *
 * this module get Got_point from KVS name users;
 *
 */
exports.setPointKVS = function(username, point) {
	var set_point = 0;
	if (point)
		set_point = point;

	var Cloud = require('ti.cloud');

	Cloud.KeyValues.set({
		name : username,
		value : point
	}, function(e) {
		if (e.success) {
			return true;
		} else {
			//エラー要件を表示する
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			return false;
			
		}
	});
}
exports.getPointKVS = function(username) {

	var Cloud = require('ti.cloud');
	Cloud.KeyValues.get({
		name : username
	}, function(e) {
		if (e.success) {
			var keyvalue = e.keyvalues[0];
			
			alert('Success:\\n' + 'name: ' + keyvalue.name + '\\n' + 'value: ' + keyvalue.value);
			
			Titanium.App.fireEvent('finish_getPoint');
			
			return keyvalue.value;
			
		} else {
			return null;
		}
	});
}