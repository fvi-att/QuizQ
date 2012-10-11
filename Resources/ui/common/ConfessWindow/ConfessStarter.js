/**
 * @author fvi@
 *
 * created@ 2012 08 09
 *
 *
 */

exports.QuizDownLoadStart = function(mode,post_id) {
	var query;
	if (!mode.type)
		query = 9999;
	if (mode.type == 'example')
		query = 9999;

	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : 'now Loading',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();

	var Cloud = require('ti.cloud');
	Cloud.Posts.show({
		post_id : post_id
	}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			actInd.hide();
			
			alert('Success:\\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.updated_at);
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			actInd.hide();
		}
	});

}