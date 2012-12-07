/*
 * created by fvi@
 * created @ 2012 11 02
 *
 */

exports.getPoint = function() {

	var Cloud = require('ti.cloud');
	var condition = new Date();

	condition.setDate(condition.getDate() - 1);

	Cloud.Objects.query({
		classname : 'point',
		page : 1,
		per_page : 10,
		where : {
			to : Titanium.App.Properties.getString('user_id'),
			created_at : {
				'$gt' : condition
			}
		}
	}, function(e) {
		if (e.success) {
			var get_point = 0;
			for (var i = 0; i < e.point.length; i++) {
				get_point += parseInt(e.point[i].point);

			}
			
			
			//取得した値をローカルに保存  その後　データを上の表示ビューに反映させる
		Titanium.App.Properties.setInt('point',Titanium.App.Properties.getInt('point') + get_point);
		Titanium.App.fireEvent('modify_point',{delta:get_point});

		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
