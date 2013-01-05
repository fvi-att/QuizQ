/*
 * created by fvi@
 * created @ 2012 11 02
 *
 */

exports.getCard = function(id) {

	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : 'ひみつを取得中',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();

	var Cloud = require('ti.cloud');

	Cloud.Objects.query({
		classname : 'secret_card1',
		where : {
			card_id : id
		}
	}, function(e) {
		if (e.success) {
			
			actInd.hide();
			
			Titanium.App.fireEvent('get_Cardinfo',{card1_info:e.secret_card1[0].content});
		} else {
			actInd.hide();
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
