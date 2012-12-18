/*
 * created @ 2012 10 14
 *
 * created by fvi @
 *
 *
 */

exports.UpdatePost = function(post_id,message) {
	
	
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '名無しさんとして返信中',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();

	var Cloud = require('ti.cloud');

	Cloud.Posts.update({
		post_id : post_id,
		content:message
	}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			Titanium.UI.createNotification({
			duration : 3000,
			message : "レスを投稿しました。"
			}).show();
			//完了とともに要素の更新を行う。 
			/* つぶやきの数が多いとマズイらしいので仕様を変更*/
;
		} else {
			actInd.hide();
			//alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			alert('投稿できませんでした　もう一度投稿しなおして見てください')
		}
	});
}
