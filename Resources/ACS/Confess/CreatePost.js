/**
 * @author fvi@
 *
 * created @ 201210051050
 *
 */
exports.createPost = function(title,message) {
	
	
	var Cloud = require('ti.cloud');
	Cloud.Posts.create({
		content : message,
		title : title
	//	photo : Titanium.Filesystem.getFile('photo.jpg')
	}, function(e) {
		if (e.success) {
			var post = e.posts[0];
			  alert('投稿しました');
			  
			  return true;
			  
			//alert('Success:\\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.updated_at);
		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			//alert('投稿に失敗しました。もう一度投稿ボタンを押してください');
			return false;
			
		}
	});
}
