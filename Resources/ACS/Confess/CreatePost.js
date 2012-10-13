/**
 * @author fvi@
 *
 * created @ 201210051050
 *
 */
exports.createPost = function(title, message, junel, photo_path) {
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		height : 100,
		width : 100,
		message : '名無しさんとして投稿中',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		}
		// style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
	});

	actInd.show();
	
	var Cloud = require('ti.cloud');
		
	if (photo_path) {
		return UploadWithImage();
	} else {
		return Upload();
	}
	
	//以下詳細な処理

	function ReturnMessage(e) {
		if (e.success) {
			var post = e.posts[0];

			if (!require('/DB/ConfessDB').InsertPost(post.id, post.title, post.content)) {
				alert('データを登録できませんでした');
				return false;
			}

			actInd.hide();

			//投稿用ウィンドウを閉じるイベントを発生させる
			Titanium.App.fireEvent('complete_post');
			//alert('Success:\\n' + 'id: ' + post.id + '\\n' + 'title: ' + post.title + '\\n' + 'content: ' + post.content + '\\n' + 'photo: ' + post.photo);

			return true;

		} else {
			alert('Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
			actInd.hide();

			//alert('投稿に失敗しました。もう一度投稿ボタンを押してください');
			return false;

		}
	}

	function UploadWithImage() {
		Cloud.Posts.create({
			content : message,
			title : title,
			tags : [junel],
			photo : Titanium.Filesystem.getFile(photo_path)
		}, function(e) {
			return ReturnMessage(e);
		});
	}

	function Upload() {
		Cloud.Posts.create({
			content : message,
			title : title,
			tags : [junel],
		}, function(e) {
			return ReturnMessage(e);
		});
	}

}
