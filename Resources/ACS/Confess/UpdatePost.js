/*
 * created @ 2012 10 14
 *
 * created by fvi @
 *
 *
 */

exports.UpdatePost = function(post_id) {
	alert('id::'+post_id);
	
	
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
		//content:'オッホホテストです'
	}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			alert('Success:\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'test_photo: ' + post.photo);
		} else {
			actInd.hide();
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}
