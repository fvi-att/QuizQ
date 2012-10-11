/**
 * @author fvi@
 *
 * created @ 201210051050
 *
 */
exports.createPost = function(title, message) {

	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '内緒で投稿中',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();
	var Cloud = require('ti.cloud');
	Cloud.Posts.create({
		content : message,
		title : title
		//	photo : Titanium.Filesystem.getFile('photo.jpg')
	}, function(e) {
		if (e.success) {
			var post = e.posts[0];

			if (!require('/DB/ConfessDB').InsertPost(post.id, post.title, post.content)) {
				alert('データを登録できませんでした');
				return false;
			}

			actInd.hide();
			alert('投稿しました');

			//投稿用ウィンドウを閉じるイベントを発生させる
			//Titanium.API.fireEvent('complete_post');

			return true;

			//alert('Success:\\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'updated_at: ' + post.updated_at);
		} else {
			//alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			actInd.hide();
			
			alert('投稿に失敗しました。もう一度投稿ボタンを押してください');
			return false;

		}
	});
}
