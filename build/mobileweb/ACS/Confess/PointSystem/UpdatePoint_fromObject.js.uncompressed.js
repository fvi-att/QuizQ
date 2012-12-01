/*
 * created by fvi@
 * created @ 2012 11 02
 *
 */

exports.createPoint = function(id, delta) {

	var Cloud = require('ti.cloud');
	Cloud.Objects.create({
		classname : 'point',
		fields : {
			point : delta,
			set : 0,
			to : id
		}
	}, function(e) {
		if (e.success) {
			var point = e.point[0];
			//alert(JSON.stringify(point));
			
			
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
